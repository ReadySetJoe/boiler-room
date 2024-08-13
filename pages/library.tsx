import { useQuery } from '@apollo/client';
import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { GetMyLibraryDocument, SortField } from '../generated/graphql';
import { SortOrder } from '../generated/resolvers-types';

type SortOption = {
  label: string;
  sort: { field: SortField; order: SortOrder };
};

const sortOptions: SortOption[] = [
  {
    label: 'Playtime - Longest First',
    sort: { field: SortField.PlaytimeForever, order: SortOrder.Desc },
  },
  {
    label: 'Playtime - Shortest First',
    sort: { field: SortField.PlaytimeForever, order: SortOrder.Asc },
  },
  {
    label: 'Name - A to Z',
    sort: { field: SortField.Name, order: SortOrder.Asc },
  },
  {
    label: 'Name - Z to A',
    sort: { field: SortField.Name, order: SortOrder.Desc },
  },
  {
    label: 'Price - Lowest First',
    sort: { field: SortField.Price, order: SortOrder.Asc },
  },
  {
    label: 'Price - Highest First',
    sort: { field: SortField.Price, order: SortOrder.Desc },
  },
];

const Library = () => {
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);
  const [search, setSearch] = useState<string>('');

  const session = useSession();

  const { data, loading } = useQuery(GetMyLibraryDocument, {
    skip: session.status !== 'authenticated',
    variables: {
      steamId: session?.data?.user.steam.steamid,
      sort: sortOption.sort,
    },
  });

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Library
        </Typography>
        <Typography sx={{ my: 3 }}>
          You need to be logged in to see your library.
        </Typography>
        <Button variant="contained" href="/api/auth/signin">
          Sign in
        </Button>
      </Container>
    );
  }

  let games = data?.getMyLibrary;

  if (search) {
    games = games.filter(game =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Library
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1} sx={{ pb: 2 }}>
          <TextField
            label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Select
            value={sortOption.label}
            onChange={e => {
              const selectedOption = sortOptions.find(
                option => option.label === e.target.value
              );
              setSortOption(selectedOption);
            }}
          >
            {sortOptions.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        {loading ? (
          <Typography>Loading your library...</Typography>
        ) : (
          games.map(game => (
            <Button
              href={`/bundles/${game.name}`}
              sx={{ width: 'fit-content' }}
            >
              <Stack
                key={game.id}
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <img src={game.image} alt={game.name} width={30} height={30} />
                <Typography variant="h6">{game.name}</Typography>
              </Stack>
            </Button>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default Library;
