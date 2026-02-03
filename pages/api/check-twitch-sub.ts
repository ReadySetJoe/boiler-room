import prisma from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions(req));

  if (!session?.user.twitchId) {
    return res
      .status(401)
      .json({ error: `Session missing twitchId: ${session}` });
  }

  try {
    const userId = session.user.twitchId;

    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        provider: 'twitch',
      },
    });

    let response = await fetch(
      `https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=${process.env.TWITCH_CHANNEL_ID}&user_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${account.access_token}`,
          'Client-Id': process.env.TWITCH_CLIENT_ID!,
        },
      }
    );

    if (response.status === 401) {
      // refresh the token
      const refreshResponse = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: account.refresh_token,
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
        }),
      });

      // and update the db
      const newTokens = await refreshResponse.json();
      await prisma.account.update({
        where: { id: account.id },
        data: {
          access_token: newTokens.access_token,
          refresh_token: newTokens.refresh_token,
          expires_at: Math.floor(Date.now() / 1000) + newTokens.expires_in,
        },
      });

      // retry the request
      response = await fetch(
        `https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=${process.env.TWITCH_CHANNEL_ID}&user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${newTokens.access_token}`,
            'Client-Id': process.env.TWITCH_CLIENT_ID!,
          },
        }
      );
    }

    if (!response.ok) {
      throw new Error(`Twitch API error: ${response.status}`);
    }

    const data = await response.json();
    const isSubscribed = data.data.length > 0;

    res.json({ isSubscribed });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check subscription status' });
  }
}
