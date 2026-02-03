import { useLazyQuery, useQuery } from '@apollo/client';
import {
  GetUserBundlesDocument,
  BundleSortField,
  SortOrder,
  GetMyLibraryDocument,
  UpdateUserGameBundleDocument,
} from '../../generated/graphql';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  LinearProgress,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { ConnectTwitch } from '../../components/connect-twitch';

export default function Bundles() {
  const session = useSession();
  const [subStatus, setSubStatus] = useState<{
    loading: boolean;
    isSubscribed: boolean;
    error: string | null;
  }>({
    loading: true,
    isSubscribed: false,
    error: null,
  });
  const [totalGames, setTotalGames] = useState(0);
  const [processedGames, setProcessedGames] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!session?.data?.user.twitchId) {
        setSubStatus(prev => ({ ...prev, loading: false }));
        return;
      }

      try {
        const response = await fetch('/api/check-twitch-sub', {
          credentials: 'same-origin',
        });

        if (!response.ok) {
          throw new Error('Failed to check subscription status');
        }

        const data = await response.json();
        setSubStatus({
          loading: false,
          isSubscribed: data.isSubscribed,
          error: null,
        });
      } catch (error) {
        setSubStatus({
          loading: false,
          isSubscribed: false,
          error: 'Failed to check subscription status',
        });
      }
    };

    checkSubscription();
  }, [session?.data?.user.twitchId]);

  const [sortField, setSortField] = useState<BundleSortField>(
    BundleSortField.Discount
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Desc);

  const { data, refetch, loading } = useQuery(GetUserBundlesDocument, {
    skip: session.status !== 'authenticated' || !subStatus.isSubscribed,
    variables: {
      steamId: session?.data?.user.steamId,
      sort: {
        field: sortField,
        order: sortOrder,
      },
    },
  });
  const [updateUserGameBundle] = useLazyQuery(UpdateUserGameBundleDocument);
  const [getMyLibrary] = useLazyQuery(GetMyLibraryDocument);

  const handleSortChange = (event: { target: { value: string } }) => {
    const [field, order] = event.target.value.split('-');
    setSortField(field as BundleSortField);
    setSortOrder(order as SortOrder);
  };

  const handleRefreshBundles = async () => {
    setIsRefreshing(true);
    setProcessedGames(0);

    const library = await getMyLibrary({
      variables: { steamId: session?.data?.user.steamId },
    });

    const games = library.data.getMyLibrary;
    setTotalGames(games.length);

    if (process.env.NODE_ENV === 'development') {
      await Promise.all(
        games.map(async game => {
          await updateUserGameBundle({
            variables: {
              steamId: session?.data?.user.steamId,
              gameName: game.name,
            },
          });
          setProcessedGames(prev => prev + 1);
        })
      );
    } else {
      for (const game of games) {
        await updateUserGameBundle({
          variables: {
            steamId: session?.data?.user.steamId,
            gameName: game.name,
          },
        });
        setProcessedGames(prev => prev + 1);
      }
    }

    await refetch();
    setIsRefreshing(false);
  };

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Import Bundles
        </Typography>
        <Typography sx={{ my: 3 }}>
          You need to be logged in to Steam before we can import your library.
        </Typography>
        <Button variant="contained" onClick={() => signIn('steam')}>
          Sign in
        </Button>
      </Container>
    );
  }

  // Check if Twitch is connected
  if (!session?.data?.user.twitchId) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Import Bundles
        </Typography>
        <Typography sx={{ my: 3 }}>
          Connect your Twitch account to access this premium feature.
        </Typography>
        <ConnectTwitch />
      </Container>
    );
  }

  // Check subscription status
  if (subStatus.loading) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Import Bundles
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={20} />
          <Typography>Checking subscription status...</Typography>
        </Box>
      </Container>
    );
  }

  if (subStatus.error) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Import Bundles
        </Typography>
        <Alert severity="error">{subStatus.error}</Alert>
      </Container>
    );
  }

  if (!subStatus.isSubscribed) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Import Bundles
        </Typography>
        <Alert severity="warning" sx={{ mb: 2 }}>
          This is a premium feature for Twitch subscribers only.
        </Alert>
        <Typography sx={{ mb: 2 }}>
          Subscribe to joepowers on Twitch to unlock the full library import
          feature.
        </Typography>
        <Button
          href="https://twitch.tv/joepowers"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            bgcolor: '#9146FF',
            '&:hover': { bgcolor: '#772CE8' },
          }}
        >
          Subscribe Now
        </Button>
      </Container>
    );
  }

  return (
    <Container component="main">
      <Typography variant="h4" sx={{ my: 3 }}>
        Import Bundles
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ mb: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          onClick={handleRefreshBundles}
          disabled={isRefreshing}
          variant="contained"
          aria-label="Refresh bundles from Steam"
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh Bundles'}
        </Button>

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <Select
            onChange={handleSortChange}
            value={`${sortField}-${sortOrder}`}
            disabled={isRefreshing}
            aria-label="Sort bundles"
          >
            <MenuItem value={`${BundleSortField.Name}-${SortOrder.Asc}`}>
              Name (A-Z)
            </MenuItem>
            <MenuItem value={`${BundleSortField.Name}-${SortOrder.Desc}`}>
              Name (Z-A)
            </MenuItem>
            <MenuItem value={`${BundleSortField.Price}-${SortOrder.Asc}`}>
              Price (Low to High)
            </MenuItem>
            <MenuItem value={`${BundleSortField.Price}-${SortOrder.Desc}`}>
              Price (High to Low)
            </MenuItem>
            <MenuItem value={`${BundleSortField.Discount}-${SortOrder.Desc}`}>
              Discount (High to Low)
            </MenuItem>
            <MenuItem value={`${BundleSortField.Discount}-${SortOrder.Asc}`}>
              Discount (Low to High)
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {isRefreshing && (
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography sx={{ mb: 1 }}>
            Refreshed {processedGames} out of {totalGames} games...
          </Typography>
          <LinearProgress
            variant="determinate"
            value={totalGames > 0 ? (processedGames / totalGames) * 100 : 0}
            sx={{ maxWidth: 400, mx: 'auto' }}
          />
        </Box>
      )}

      {loading && !isRefreshing && (
        <Stack spacing={2}>
          {[1, 2, 3].map(i => (
            <Skeleton key={i} variant="rectangular" height={100} />
          ))}
        </Stack>
      )}

      <Grid container spacing={2}>
        {!isRefreshing &&
          data?.getUserBundles.map(bundle => (
            <Grid item xs={12} key={bundle.id}>
              <Card
                component="a"
                href={bundle.url}
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
                  sx={{ width: 128, objectFit: 'contain' }}
                  image={bundle.image}
                  alt={bundle.name}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {bundle.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {bundle.price}
                  </Typography>
                  <Typography variant="body2" color="success.main">
                    {bundle.discount}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
