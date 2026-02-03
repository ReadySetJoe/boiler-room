import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions(req));

  if (!session?.user?.id) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Remove the Twitch account link
    await prisma.account.deleteMany({
      where: {
        userId: session.user.id,
        provider: 'twitch',
      },
    });

    // Clear the twitchId from the user
    await prisma.user.update({
      where: { id: session.user.id },
      data: { twitchId: null },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to disconnect Twitch' });
  }
}
