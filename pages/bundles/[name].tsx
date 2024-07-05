import { useQuery } from '@apollo/client';
import { Button, Container, Stack, Typography } from '@mui/material';
import currency from 'currency.js';
import { useParams } from 'next/navigation';
import {
  GetBundlesByGameNameDocument,
  SearchSteamDocument,
} from '../../generated/graphql';

const BundlesByGameName = () => {
  const params = useParams();
  const name = params?.name as string;

  const { data: bundlesData, loading: bundlesLoading } = useQuery(
    GetBundlesByGameNameDocument,
    {
      skip: !name,
      variables: { name },
    }
  );
  const bundles = bundlesData?.getBundlesByGameName;

  const { data: gameData, loading: gameLoading } = useQuery(
    SearchSteamDocument,
    {
      variables: { q: name },
    }
  );
  const game = gameData?.searchSteam[0];

  if (!name || !game || gameLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        {name}
      </Typography>
      <Typography sx={{ color: 'green' }}>
        Current price: {game.price}
      </Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bundles:
      </Typography>
      <Stack spacing={4}>
        {bundlesLoading ? (
          <Typography>Loading your bundles...</Typography>
        ) : bundles.length === 0 ? (
          <Typography>No bundles found.</Typography>
        ) : (
          <>
            {bundles.map(bundle => (
              <a href={bundle.url} target="_blank" rel="noreferrer noopener">
                <Stack
                  key={bundle.id}
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems={{ xs: 'flex-start', md: 'center' }}
                  spacing={{ xs: 1, md: 3 }}
                  flexWrap={{ xs: 'wrap', md: 'nowrap' }}
                >
                  <img src={bundle.image} alt={bundle.name} height={30} />
                  <Stack direction="column">
                    <Typography>{bundle.name}</Typography>
                    <Stack direction="row" spacing={1}>
                      <Typography
                        sx={{ color: 'gray', textDecoration: 'line-through' }}
                      >
                        {bundle.price}
                      </Typography>
                      <Typography sx={{ color: 'green' }}>
                        ~{currency(bundle.price).subtract(game.price).format()}{' '}
                        - {bundle.discount} off
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </a>
            ))}
            <Typography variant="body2" sx={{ my: 3, color: 'gray' }}>
              Note: all bundle prices are approximate. Exact pricing in a future
              update.
            </Typography>
          </>
        )}
      </Stack>
      <Button href="/library" size="large" variant="contained" sx={{ mt: 3 }}>
        Back to your library
      </Button>
    </Container>
  );
};

export default BundlesByGameName;
