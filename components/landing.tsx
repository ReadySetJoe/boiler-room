import { Button, Stack, Typography } from '@mui/material';
import GameSearch from './GameSearch';

const Landing = () => {
  return (
    <Stack spacing={4} paddingTop={3}>
      <Typography variant="h4">Welcome! Let's find some deals:</Typography>
      <Button href="/library" variant="contained" size="large">
        Start by using your library
      </Button>
      <Typography>Or search for bundles for any game:</Typography>
      <GameSearch />
    </Stack>
  );
};

export default Landing;
