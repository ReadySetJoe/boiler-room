import { useLazyQuery } from '@apollo/client';
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { SearchSteamDocument } from '../generated/graphql';

interface GameSearchProps {
  label?: string;
}

const GameSearch = ({ label = 'Search for bundles' }: GameSearchProps) => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const [searchSteam, { data, loading }] = useLazyQuery(SearchSteamDocument, {
    variables: { q: search },
  });
  const [searchSteamBundles, { data: bundlesData, loading: bundlesLoading }] =
    useLazyQuery(SearchSteamDocument, {
      variables: { q: search, bundlesOnly: true },
    });

  useEffect(() => {
    if (search.length > 3) {
      searchSteam({
        variables: { q: search },
      });
    } else {
      setOptions([]);
    }
  }, [search, searchSteam]);

  useEffect(() => {
    if (data) {
      setOptions(data.searchSteam?.map(game => game.name) ?? []);
    }
  }, [data]);

  useEffect(() => {
    if (selectedGame) {
      searchSteamBundles({
        variables: { q: selectedGame, bundlesOnly: true },
      });
    }
  }, [selectedGame, searchSteamBundles]);

  return (
    <Stack spacing={3}>
      <Autocomplete
        inputValue={search}
        onInputChange={(_, newValue) => {
          setSearch(newValue);
        }}
        onChange={(_, newValue) => {
          setSelectedGame(newValue);
        }}
        value={selectedGame}
        options={options}
        loading={loading}
        renderInput={params => (
          <TextField {...params} label={label} aria-label={label} />
        )}
      />
      <Stack spacing={2}>
        {selectedGame && bundlesLoading ? (
          <Stack spacing={1}>
            {[1, 2, 3].map(i => (
              <Skeleton key={i} variant="rectangular" height={80} />
            ))}
          </Stack>
        ) : (
          bundlesData?.searchSteam?.map(game => (
            <Card
              key={game.id}
              component="a"
              href={game.url ?? '#'}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 120, objectFit: 'contain' }}
                image={game.image ?? ''}
                alt={game.name}
              />
              <CardContent>
                <Typography variant="subtitle1">{game.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.price}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Stack>
      {selectedGame &&
        !bundlesLoading &&
        bundlesData?.searchSteam?.length === 0 && (
          <Typography color="text.secondary">
            No bundles found for {selectedGame}
          </Typography>
        )}
    </Stack>
  );
};

export default GameSearch;
