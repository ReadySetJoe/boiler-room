import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

export function ConnectTwitch() {
  const { data: session, update: updateSession } = useSession();
  const [isLinking, setIsLinking] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleConnect = async () => {
    setIsLinking(true);
    try {
      await signIn('twitch');
      await updateSession();
    } finally {
      setIsLinking(false);
    }
  };

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      const response = await fetch('/api/disconnect-twitch', { method: 'POST' });
      if (response.ok) {
        await updateSession();
      }
    } finally {
      setIsDisconnecting(false);
    }
  };

  const isTwitchConnected = !!session?.user.twitchId;

  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Twitch Connection
      </Typography>
      {isTwitchConnected ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ color: 'success.main' }}>
            Connected to Twitch
          </Typography>
          <Button
            onClick={handleDisconnect}
            disabled={isDisconnecting}
            color="error"
            size="small"
            aria-label="Disconnect Twitch account"
          >
            {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
          </Button>
        </Stack>
      ) : (
        <Button
          onClick={handleConnect}
          disabled={isLinking}
          variant="contained"
          sx={{
            bgcolor: '#9146FF',
            '&:hover': { bgcolor: '#772CE8' },
          }}
          aria-label="Connect Twitch account"
        >
          {isLinking ? 'Connecting...' : 'Connect Twitch Account'}
        </Button>
      )}
    </Box>
  );
}
