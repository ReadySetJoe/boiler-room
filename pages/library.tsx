import { useQuery } from '@apollo/client';
import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
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
      steamId: session.data?.user.steamId,
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
        <Button variant="contained" onClick={() => signIn('steam')}>
          Sign in
        </Button>
      </Container>
    );
  }

  let games = data?.getMyLibrary;

  if (search && games) {
    games = games.filter(game =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Container component="section">
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ pb: 2 }}
        >
          <Typography variant="h4" sx={{ paddingRight: 4 }}>
            Library
          </Typography>
          <TextField
            label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            fullWidth
            sx={{ maxWidth: { sm: 300 } }}
            aria-label="Search games in library"
          />
          <FormControl sx={{ minWidth: { xs: '100%', sm: 220 } }}>
            <Select
              value={sortOption.label}
              onChange={e => {
                const selectedOption = sortOptions.find(
                  option => option.label === e.target.value
                );
                if (selectedOption) {
                  setSortOption(selectedOption);
                }
              }}
              aria-label="Sort games"
            >
              {sortOptions.map(option => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        {loading ? (
          <Grid container spacing={1}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Skeleton variant="rectangular" height={50} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={1}>
            {games?.map(game => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Button
                  href={`/bundles/${encodeURIComponent(game.name)}`}
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      src={game.image}
                      alt={game.name}
                      sx={{ width: 30, height: 30 }}
                      variant="rounded"
                    />
                    <Typography
                      variant="body1"
                      sx={
                        {
                          // overflow: 'hidden',
                          // textOverflow: 'ellipsis',
                          // whiteSpace: 'nowrap',
                        }
                      }
                    >
                      {game.name}
                    </Typography>
                  </Stack>
                </Button>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </Container>
  );
};

export default Library;
