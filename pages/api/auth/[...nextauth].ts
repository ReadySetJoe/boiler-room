import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { AuthOptions } from 'next-auth';
import TwitchProvider from 'next-auth/providers/twitch';
import SteamProvider from 'next-auth-steam';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';

const authOptions = (req: NextApiRequest): AuthOptions => ({
  adapter: PrismaAdapter(prisma),
  providers: [
    SteamProvider(req, {
      clientSecret: process.env.STEAM_API_KEY!,
      callbackUrl: process.env.NEXTAUTH_URL + '/api/auth/callback/steam',
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            'openid user:read:email user:read:subscriptions channel:read:subscriptions',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account || !profile) return false;

      if (account.provider === 'steam') {
        const steamId = profile.steamid;

        try {
          // Check for existing Steam account
          const existingUser = await prisma.user.findFirst({
            where: {
              OR: [
                { steamId: steamId },
                {
                  accounts: {
                    some: {
                      provider: 'steam',
                      providerAccountId: steamId,
                    },
                  },
                },
              ],
            },
            include: { accounts: true },
          });

          if (existingUser) {
            if (!existingUser.steamId) {
              await prisma.user.update({
                where: { id: existingUser.id },
                data: { steamId: steamId },
              });
            }
            return true;
          }

          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              steamId: steamId,
              accounts: {
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: steamId,
                  access_token: account.access_token,
                  token_type: account.token_type,
                },
              },
            },
          });
          return true;
        } catch (error) {
          console.error('Error in Steam sign in:', error);
          return false;
        }
      }

      if (account.provider === 'twitch') {
        try {
          const currentUser = await prisma.session.findFirst({
            where: {
              // Look for active sessions
              expires: { gt: new Date() },
            },
            include: {
              user: {
                include: { accounts: true },
              },
            },
            orderBy: {
              expires: 'desc',
            },
          });

          if (!currentUser?.user?.steamId) {
            console.log('No Steam account found, redirecting to sign in');
            return false;
          }

          // Check if Twitch is already linked
          const hasTwitch = currentUser.user.accounts.some(
            acc => acc.provider === 'twitch'
          );

          if (hasTwitch) {
            console.log('Twitch already linked');
            return true;
          }

          // Link Twitch to existing Steam account
          await prisma.account.create({
            data: {
              userId: currentUser.user.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              expires_at: account.expires_at,
              token_type: account.token_type,
              scope: account.scope,
            },
          });

          await prisma.user.update({
            where: { id: currentUser.user.id },
            data: { twitchId: account.providerAccountId },
          });

          return true;
        } catch (error) {
          console.error('Error in Twitch connection:', error);
          return false;
        }
      }

      return false; // Deny other providers
    },
    async session({ session, user }) {
      if (session.user) {
        const userData = await prisma.user.findUnique({
          where: { id: user.id },
          include: { accounts: true },
        });

        if (!userData) return session;

        session.user.id = user.id;
        session.user.steamId = userData.steamId || undefined;
        session.user.twitchId = userData.twitchId || undefined;
        session.user.providers = userData.accounts.map(acc => acc.provider);
      }
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === 'steam' && profile) {
        token.steamId = profile.steamid;
      }
      return token;
    },
  },
});

// Export the handler
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions(req));
}
