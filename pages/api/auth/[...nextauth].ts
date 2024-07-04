import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_API_KEY,
        callbackUrl: process.env.BASE_URL + '/api/auth/callback',
      }),
    ],
    callbacks: {
      jwt({ token, account, profile }) {
        if (account?.provider === PROVIDER_ID) {
          token.steam = profile;
        }

        return token;
      },
      session({ session, token }) {
        if ('steam' in token) {
          session.user.steam = token.steam;
        }

        return session;
      },
    },
  });
}
