import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { ConnectTwitch } from '../../components/connect-twitch';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';

const pages = [
  {
    name: 'Import Bundles',
    url: '/twitch/bundles',
    description: 'Import your library to find ALL bundles',
  },
];

const TwitchSubStatus = () => {
  const session = useSession();
  const sessionData = session.data;
  const [subStatus, setSubStatus] = useState({
    loading: true,
    isSubscribed: false,
    error: null,
  });

  useEffect(() => {
    const checkSubscription = async () => {
      if (!sessionData?.user.twitchId) {
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
  }, [sessionData?.user.twitchId]);

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Premium
        </Typography>
        <Typography sx={{ my: 3 }}>
          You need to be logged in to Steam first, then we'll check your Twitch
          subscription.
        </Typography>
        <Button variant="contained" onClick={() => signIn('steam')}>
          Sign in
        </Button>
      </Container>
    );
  }

  if (!sessionData?.user.twitchId) {
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            {pages.map(page => (
              <Link key={page.url} href={page.url}>
                <div
                  style={{
                    padding: '16px',
                    border: '1px solid #FFF',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#FFF',
                    margin: '8px',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = '#2d3748')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  <Typography variant="h6" style={{ margin: '6px 0px' }}>
                    {page.name}
                  </Typography>
                  <Typography style={{ margin: '6px 0px' }}>
                    {page.description}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
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
