import { useQuery } from '@apollo/client';
import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { GetMyLibraryDocument, SortField } from '../generated/graphql';
import { SortOrder } from '../generated/resolvers-types';

const Library = () => {
  const [sortField, setSortField] = useState<SortField>();
  const [sortOrder, setSortOrder] = useState<SortOrder>();

  const session = useSession();

  const { data, loading } = useQuery(GetMyLibraryDocument, {
    skip: session.status !== 'authenticated',
    variables: {
      steamId: session?.data?.user.steam.steamid,
      sort: {
        field: sortField || SortField.PlaytimeForever,
        order: sortOrder || SortOrder.Desc,
      },
    },
  });

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Library
        </Typography>
        <Typography>You need to be logged in to see your library.</Typography>
        <Button
          variant="contained"
          href="/api/auth/signin"
          disabled={!!session}
        >
          Sign in
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Library
      </Typography>
      <Stack spacing={2}>
        <Select
          value={sortField}
          label="Sort by..."
          onChange={e => setSortField(e.target.value as SortField)}
        >
          <MenuItem value={SortField.PlaytimeForever}>Playtime</MenuItem>
          <MenuItem value={SortField.Name}>Name</MenuItem>
          <MenuItem value={SortField.Price}>Price</MenuItem>
        </Select>
        <Select
          value={sortOrder}
          label="Sort direction"
          onChange={e => setSortOrder(e.target.value as SortOrder)}
        >
          <MenuItem value={SortOrder.Asc}>Ascending</MenuItem>
          <MenuItem value={SortOrder.Desc}>Descending</MenuItem>
        </Select>
        {loading ? (
          <Typography>Loading your library...</Typography>
        ) : (
          data?.getMyLibrary.map(game => (
            <Stack
              key={game.id}
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <img src={game.image} alt={game.name} width={30} height={30} />
              <Typography>{game.name}</Typography>
            </Stack>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default Library;
