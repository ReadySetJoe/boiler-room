import { Container, Stack, Typography } from '@mui/material';
import GameSearch from '../components/GameSearch';

const SearchPage = () => {
  return (
    <Container>
      <Stack spacing={3}>
        <Typography variant="h4">Search for Bundles</Typography>
        <GameSearch label="Search for a game" />
      </Stack>
    </Container>
  );
};

export default SearchPage;
