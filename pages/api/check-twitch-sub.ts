// pages/api/check-twitch-sub.ts
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();
export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session?.user.twitchId) {
    return res.status(401).json({ error: 'Not authenticated with Twitch' });
  }

  try {
    // Joe Powers' Twitch channel ID
    const CHANNEL_ID = '103902342'; // This is joepowers' channel ID
    const userId = session.user.twitchId;

    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        provider: 'twitch',
      },
    });

    const response = await fetch(
      `https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=${CHANNEL_ID}&user_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${account.access_token}`,
          'Client-Id': process.env.TWITCH_CLIENT_ID!,
        },
      }
    );

    console.log('response:', response);

    if (!response.ok) {
      throw new Error(`Twitch API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('data:', data);
    const isSubscribed = data.data.length > 0;

    res.json({ isSubscribed });
  } catch (error) {
    console.error('Error checking subscription:', error);
    res.status(500).json({ error: 'Failed to check subscription status' });
  }
}
