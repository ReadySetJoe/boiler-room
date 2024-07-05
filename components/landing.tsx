import { useLazyQuery } from '@apollo/client';
import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { SearchSteamDocument } from '../generated/graphql';

const Landing = () => {
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
  }, [search]);

  useEffect(() => {
    if (data) {
      setOptions(data.searchSteam.map(game => game.name));
    }
  }, [data]);

  useEffect(() => {
    searchSteamBundles({
      variables: { q: selectedGame, bundlesOnly: true },
    });
  }, [selectedGame]);

  return (
    <Stack spacing={5} paddingTop={5}>
      <Typography variant="h4">Welcome! Let's find some deals:</Typography>
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
          <TextField {...params} label="Search for bundles" />
        )}
      />
      <Stack spacing={2}>
        {selectedGame && bundlesLoading ? (
          <Typography>Loading bundles...</Typography>
        ) : (
          bundlesData?.searchSteam.map(game => (
            <a key={game.id} href={game.url}>
              <Box key={game.id}>
                <img src={game.image} alt={game.name} />
                <Typography>{game.name}</Typography>
                <Typography>{game.price}</Typography>
              </Box>
            </a>
          ))
        )}
      </Stack>
      {selectedGame &&
        !bundlesLoading &&
        bundlesData?.searchSteam.length === 0 && (
          <Typography>No bundles found for {selectedGame}</Typography>
        )}
      <Button href="/library">Or start by using your library</Button>
    </Stack>
  );
};

export default Landing;
