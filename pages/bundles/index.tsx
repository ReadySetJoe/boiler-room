import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { GetMyBundlesDocument } from '../../generated/graphql';

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
      <Typography variant="h5" sx={{ my: 3 }}>
        {'Nothing here yet :('}
      </Typography>
      <Typography variant="h6">
        Fetching all bundles for your account is SUPER slow.
      </Typography>
      <Typography variant="h6">
        We're working on a better way to display this information.
      </Typography>
      {/* <Stack spacing={2}>
        {loading ? (
          <Typography>Loading your bundles...</Typography>
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
      </Stack> */}
    </Container>
  );
};

export default Library;
