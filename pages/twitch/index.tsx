import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { ConnectTwitch } from '../../components/connect-twitch';
import Link from 'next/link';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

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
  const [subStatus, setSubStatus] = useState<{
    loading: boolean;
    isSubscribed: boolean;
    error: string | null;
  }>({
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
      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography sx={{ color: 'text.secondary', mb: 2 }}>
          Connect your Twitch account to check subscription status
        </Typography>
        <ConnectTwitch />
      </Box>
    );
  }

  if (subStatus.loading) {
    return (
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CircularProgress size={20} />
        <Typography sx={{ color: 'text.secondary' }}>
          Checking subscription status...
        </Typography>
      </Box>
    );
  }

  if (subStatus.error) {
    return (
      <Alert severity="error" sx={{ borderRadius: 2 }}>
        {subStatus.error}
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: subStatus.isSubscribed ? 'success.dark' : 'warning.dark',
        borderRadius: 2,
      }}
    >
      {subStatus.isSubscribed ? (
        <Box>
          <Typography sx={{ color: 'success.contrastText', mb: 2 }}>
            You are subscribed to joepowers!
          </Typography>
          <Grid container spacing={2}>
            {pages.map(page => (
              <Grid item xs={12} sm={6} key={page.url}>
                <Link href={page.url} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">{page.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {page.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box>
          <Typography sx={{ color: 'warning.contrastText', mb: 2 }}>
            You are not currently subscribed to joepowers
          </Typography>
          <Button
            href="https://twitch.tv/joepowers"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              bgcolor: '#9146FF',
              '&:hover': { bgcolor: '#772CE8' },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TwitchSubStatus;
