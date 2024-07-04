import { useQuery } from '@apollo/client';
import { Container, Stack, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { GetMyBundlesDocument } from '../generated/graphql';

const Library = () => {
  const session = useSession();

  const { data, loading } = useQuery(GetMyBundlesDocument, {
    skip: session.status !== 'authenticated',
    variables: { steamId: session?.data?.user.steam.steamid },
  });

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Bundles
      </Typography>
      <Stack spacing={2}>
        {loading ? (
          <Typography>Loading your library...</Typography>
        ) : (
          data?.getMyBundles.map(game => (
            <a href={game.url} target="_blank" rel="noreferrer noopener">
              <Stack
                key={game.id}
                direction="row"
                alignItems="center"
                spacing={3}
              >
                <img src={game.image} alt={game.name} height={30} />
                <Typography>{game.name}</Typography>
                <Typography sx={{ color: 'green' }}>{game.price}</Typography>
              </Stack>
            </a>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default Library;
