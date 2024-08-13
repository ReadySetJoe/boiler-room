import { useLazyQuery, useQuery } from '@apollo/client';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import {
  GetMyFriendsDocument,
  GetSharedGamesDocument,
} from '../generated/graphql';

const BuddiesPage = () => {
  const session = useSession();
  const steamId = session?.data?.user.steam.steamid;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { data, loading } = useQuery(GetMyFriendsDocument, {
    skip: session.status !== 'authenticated',
    variables: {
      steamId,
    },
  });
  const friends = data?.getMyFriends ?? [];

  const [
    getSharedGames,
    { data: sharedGamesData, loading: sharedGamesLoading },
  ] = useLazyQuery(GetSharedGamesDocument);
  const sharedGames = sharedGamesData?.getSharedGames ?? [];

  const onClick = async () => {
    getSharedGames({
      variables: {
        steamIds: [...selectedIds, steamId],
      },
    });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Where we droppin?
      </Typography>
      <Typography sx={{ mb: 3 }}>
        This should help you find which games you and your friends have in
        common.
      </Typography>
      {loading && <CircularProgress />}
      <Box>
        {friends.map(f => (
          <Button
            onClick={() =>
              selectedIds.includes(f.id)
                ? setSelectedIds([...selectedIds.filter(id => id !== f.id)])
                : setSelectedIds([...selectedIds, f.id])
            }
            variant={selectedIds.includes(f.id) ? 'contained' : 'outlined'}
            sx={{ m: 1, pl: 0 }}
          >
            <Checkbox checked={selectedIds.includes(f.id)} />
            <Avatar src={f.avatar} sx={{ mr: 1 }} />
            {f.name}
          </Button>
        ))}
      </Box>
      <Stack sx={{ pb: 4 }}>
        <Button
          disabled={selectedIds.length === 0}
          variant="contained"
          sx={{ my: 1 }}
          onClick={onClick}
        >
          Find shared games
        </Button>
        <Button
          variant="outlined"
          onClick={() => setSelectedIds([])}
          disabled={selectedIds.length === 0}
        >
          Clear all
        </Button>
      </Stack>
      {sharedGamesLoading && <CircularProgress />}
      {sharedGames.length > 0 &&
        sharedGames.map(g => (
          <a href={g.url} target="_blank" rel="noreferrer noopener">
            <Button variant="outlined" sx={{ m: 1 }}>
              <Avatar src={g.image} sx={{ mr: 2 }} />
              {g.name}
            </Button>
          </a>
        ))}
      {sharedGames.length === 0 && !sharedGamesLoading && (
        <Typography>
          No shared games found (or their list is private)
        </Typography>
      )}
    </Container>
  );
};

export default BuddiesPage;
