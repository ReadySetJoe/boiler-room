import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ConnectTwitch } from '../../components/connect-twitch';

const TwitchSubStatus = () => {
  const { data: session } = useSession();
  const [subStatus, setSubStatus] = useState({
    loading: true,
    isSubscribed: false,
    error: null,
  });

  useEffect(() => {
    const checkSubscription = async () => {
      if (!session?.user.twitchId) {
        setSubStatus(prev => ({ ...prev, loading: false }));
        return;
      }

      try {
        const response = await fetch('/api/check-twitch-sub', {
          credentials: 'same-origin',
        });

        if (!response.ok) {
          throw new Error('Failed to check subscription status');
        }

        const data = await response.json();
        setSubStatus({
          loading: false,
          isSubscribed: data.isSubscribed,
          error: null,
        });
      } catch (error) {
        setSubStatus({
          loading: false,
          isSubscribed: false,
          error: 'Failed to check subscription status',
        });
      }
    };

    checkSubscription();
  }, [session?.user.twitchId]);

  if (!session?.user.twitchId) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">
          Connect your Twitch account to check subscription status
        </p>
        <ConnectTwitch />
      </div>
    );
  }

  if (subStatus.loading) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">Checking subscription status...</p>
      </div>
    );
  }

  if (subStatus.error) {
    return (
      <div className="p-4 bg-red-100 rounded-lg">
        <p className="text-red-600">{subStatus.error}</p>
      </div>
    );
  }

  return (
    <div
      className={`p-4 ${
        subStatus.isSubscribed ? 'bg-green-100' : 'bg-yellow-100'
      } rounded-lg`}
    >
      {subStatus.isSubscribed ? (
        <div className="flex items-center space-x-2">
          <span className="text-green-600">
            ✓ You are subscribed to joepowers!
          </span>
          <a href="/twitch/bundles" className="text-blue-600">
            View Bundles
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-yellow-800">
            You are not currently subscribed to joepowers
          </p>
          <a
            href="https://twitch.tv/joepowers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Subscribe Now
          </a>
        </div>
      )}
    </div>
  );
};

export default TwitchSubStatus;
