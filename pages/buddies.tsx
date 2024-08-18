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

const groupSharedGamesByNumberOfOwners = (sharedGames: any) => {
  const grouped = sharedGames.reduce((acc: any, game: any) => {
    const numOwners = game.friends.length;

    if (!acc[numOwners]) {
      acc[numOwners] = [];
    }

    acc[numOwners].push(game);

    return acc;
  }, {});

  return grouped;
};

const BuddiesPage = () => {
  const session = useSession();
  const steamId = session?.data?.user.steam.steamid;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

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
    setShowResults(true);
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
            onClick={() => {
              setShowResults(false);
              selectedIds.includes(f.id)
                ? setSelectedIds([...selectedIds.filter(id => id !== f.id)])
                : setSelectedIds([...selectedIds, f.id]);
            }}
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
          onClick={() => {
            setShowResults(false);
            setSelectedIds([]);
          }}
          disabled={selectedIds.length === 0}
        >
          Clear all
        </Button>
      </Stack>
      {sharedGamesLoading && <CircularProgress />}
      {sharedGames.length > 0 && !sharedGamesLoading && showResults && (
        <Box>
          {Object.entries(groupSharedGamesByNumberOfOwners(sharedGames))
            .sort(([a], [b]) => Number(b) - Number(a))
            .filter(([numOwners]) => Number(numOwners) > 1)
            .map(([numOwners, sharedGames]: any) => (
              <>
                {Number(numOwners) === selectedIds.length + 1 ? (
                  <Typography variant="h5">All of you own:</Typography>
                ) : (
                  <Typography variant="h5">
                    {numOwners} out of {selectedIds.length + 1}:
                  </Typography>
                )}
                <Box
                  key={numOwners}
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  {sharedGames.map((sharedGame: any) => (
                    <a
                      href={sharedGame.game.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button sx={{ m: 0.5 }}>
                        <Stack
                          key={sharedGame.game.appid}
                          direction="row"
                          sx={{
                            alignItems: 'center',
                            my: 1,
                          }}
                        >
                          <Avatar src={sharedGame.game.image} sx={{ mr: 2 }} />
                          <Typography>{sharedGame.game.name}</Typography>
                        </Stack>
                      </Button>
                    </a>
                  ))}
                </Box>
              </>
            ))}
        </Box>
      )}
      {sharedGames.length === 0 && !sharedGamesLoading && showResults && (
        <Typography>
          No shared games found (or their list is private)
        </Typography>
      )}
    </Container>
  );
};

export default BuddiesPage;
