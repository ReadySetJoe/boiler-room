import { useLazyQuery, useQuery } from '@apollo/client';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import {
  GetMyFriendsDocument,
  GetSharedGamesDocument,
  GetSharedGamesQuery,
} from '../generated/graphql';

type SharedGameItem = NonNullable<
  NonNullable<GetSharedGamesQuery['getSharedGames']>[number]
>;

type GroupedSharedGames = Record<number, SharedGameItem[]>;

const groupSharedGamesByNumberOfOwners = (
  sharedGames: SharedGameItem[]
): GroupedSharedGames => {
  return sharedGames.reduce<GroupedSharedGames>((acc, game) => {
    const numOwners = game.friends?.length ?? 0;

    if (!acc[numOwners]) {
      acc[numOwners] = [];
    }

    acc[numOwners].push(game);

    return acc;
  }, {});
};

const BuddiesPage = () => {
  const session = useSession();
  const steamId = session?.data?.user.steamId;
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
  const sharedGames = (sharedGamesData?.getSharedGames ?? []).filter(
    (game): game is SharedGameItem => game !== null
  );

  const onClick = async () => {
    getSharedGames({
      variables: {
        steamIds: [...selectedIds, steamId],
      },
    });
    setShowResults(true);
  };

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Buddies
        </Typography>
        <Typography sx={{ my: 3 }}>
          You need to be logged in to see your friends list.
        </Typography>
        <Button variant="contained" onClick={() => signIn('steam')}>
          Sign in
        </Button>
      </Container>
    );
  }

  return (
    <Container component="section">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Where we droppin?
      </Typography>
      <Typography sx={{ mb: 3 }}>
        This should help you find which games you and your friends have in
        common.
      </Typography>
      {loading && <CircularProgress aria-label="Loading friends" />}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {friends.map(f => (
          <Button
            key={f.id}
            onClick={() => {
              setShowResults(false);
              selectedIds.includes(f.id)
                ? setSelectedIds([...selectedIds.filter(id => id !== f.id)])
                : setSelectedIds([...selectedIds, f.id]);
            }}
            variant={selectedIds.includes(f.id) ? 'contained' : 'outlined'}
            sx={{ m: 1, p: 1 }}
            aria-pressed={selectedIds.includes(f.id)}
          >
            <Avatar src={f.avatar} sx={{ mr: 1 }} alt={`${f.name}'s avatar`} />
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
      {sharedGamesLoading && (
        <CircularProgress aria-label="Loading shared games" />
      )}
      {sharedGames.length > 0 && !sharedGamesLoading && showResults && (
        <Box>
          {Object.entries(groupSharedGamesByNumberOfOwners(sharedGames))
            .sort(([a], [b]) => Number(b) - Number(a))
            .filter(([numOwners]) => Number(numOwners) > 1)
            .map(([numOwners, groupedGames]) => (
              <React.Fragment key={numOwners}>
                {Number(numOwners) === selectedIds.length + 1 ? (
                  <Typography variant="h6">All of you own:</Typography>
                ) : (
                  <Typography variant="h6">
                    {numOwners} out of {selectedIds.length + 1}:
                  </Typography>
                )}
                <Box
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  {groupedGames
                    .sort((a, b) =>
                      (a.game?.name ?? '').localeCompare(b.game?.name ?? '')
                    )
                    .map(sharedGame => (
                      <a
                        key={sharedGame.game?.id}
                        href={sharedGame.game?.url ?? '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Stack
                          direction="row"
                          sx={{
                            alignItems: 'center',
                            my: 1,
                          }}
                        >
                          <Avatar
                            src={sharedGame.game?.image ?? ''}
                            sx={{ mr: 2 }}
                            alt={sharedGame.game?.name ?? 'Game'}
                          />
                          <Typography variant="body1">
                            {sharedGame.game?.name}
                          </Typography>
                        </Stack>
                      </a>
                    ))}
                </Box>
              </React.Fragment>
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
