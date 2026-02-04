import { useLazyQuery } from '@apollo/client';
import {
  SearchMultiStoreDocument,
  GetGamePricesDocument,
} from '../../generated/graphql';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ConnectTwitch } from '../../components/connect-twitch';
import { ExternalLink, TrendingDown, History } from 'lucide-react';

interface GameOption {
  gameId: string;
  title: string;
  thumb: string | null;
  cheapestPrice: string | null;
}

export default function MultiStoreSearch() {
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

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<GameOption[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameOption | null>(null);

  const [searchMultiStore, { loading: searchLoading }] = useLazyQuery(
    SearchMultiStoreDocument
  );
  const [getGamePrices, { data: pricesData, loading: pricesLoading }] =
    useLazyQuery(GetGamePricesDocument);

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

  useEffect(() => {
    const searchGames = async () => {
      if (search.length > 2) {
        const result = await searchMultiStore({
          variables: { q: search },
        });
        const games = result.data?.searchMultiStore?.filter(Boolean) || [];
        setOptions(
          games.map(g => ({
            gameId: g!.gameId,
            title: g!.title,
            thumb: g!.thumb || null,
            cheapestPrice: g!.cheapestPrice || null,
          }))
        );
      } else {
        setOptions([]);
      }
    };

    const debounce = setTimeout(searchGames, 300);
    return () => clearTimeout(debounce);
  }, [search, searchMultiStore]);

  useEffect(() => {
    if (selectedGame) {
      getGamePrices({
        variables: { gameId: selectedGame.gameId },
      });
    }
  }, [selectedGame, getGamePrices]);

  if (session.status !== 'authenticated') {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Multi-Store Search
        </Typography>
        <Typography sx={{ my: 3 }}>
          You need to be logged in to Steam before using this feature.
        </Typography>
        <Button variant="contained" onClick={() => signIn('steam')}>
          Sign in
        </Button>
      </Container>
    );
  }

  if (!session?.data?.user.twitchId) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Multi-Store Search
        </Typography>
        <Typography sx={{ my: 3 }}>
          Connect your Twitch account to access this premium feature.
        </Typography>
        <ConnectTwitch />
      </Container>
    );
  }

  if (subStatus.loading) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Multi-Store Search
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
          Multi-Store Search
        </Typography>
        <Alert severity="error">{subStatus.error}</Alert>
      </Container>
    );
  }

  if (!subStatus.isSubscribed) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Multi-Store Search
        </Typography>
        <Alert severity="warning" sx={{ mb: 2 }}>
          This is a premium feature for Twitch subscribers only.
        </Alert>
        <Typography sx={{ mb: 2 }}>
          Subscribe to joepowers on Twitch to unlock multi-store search with
          price comparison across 15+ stores.
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

  const gameResult = pricesData?.getGamePrices;
  const stores = gameResult?.stores || [];
  const lowestPriceStore = stores.length > 0 ? stores[0] : null;

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Multi-Store Search
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Search for a game and compare prices across Steam, Humble Bundle,
        Fanatical, GOG, Epic Games Store, and more.
      </Typography>

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
        loading={searchLoading}
        getOptionLabel={option => option.title}
        isOptionEqualToValue={(option, value) => option.gameId === value.gameId}
        sx={{ mb: 4 }}
        renderOption={(props, option) => (
          <li {...props} key={option.gameId}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {option.thumb && (
                <img
                  src={option.thumb}
                  alt=""
                  style={{ width: 60, height: 22, objectFit: 'cover' }}
                />
              )}
              <Box>
                <Typography variant="body2">{option.title}</Typography>
                {option.cheapestPrice && (
                  <Typography variant="caption" color="success.main">
                    From {option.cheapestPrice}
                  </Typography>
                )}
              </Box>
            </Box>
          </li>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Search for a game"
            aria-label="Search for a game"
          />
        )}
      />

      {selectedGame && pricesLoading && (
        <Stack spacing={2}>
          {[1, 2, 3, 4, 5].map(i => (
            <Skeleton key={i} variant="rectangular" height={72} />
          ))}
        </Stack>
      )}

      {selectedGame && !pricesLoading && gameResult && (
        <Stack spacing={2}>
          {/* Game header */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {gameResult.thumb && (
                  <img
                    src={gameResult.thumb}
                    alt={gameResult.title}
                    style={{ width: 120, height: 45, objectFit: 'cover' }}
                  />
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">{gameResult.title}</Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    {lowestPriceStore && (
                      <Chip
                        icon={<TrendingDown size={14} />}
                        label={`Best: ${lowestPriceStore.price} at ${lowestPriceStore.storeName}`}
                        color="success"
                        size="small"
                      />
                    )}
                    {gameResult.cheapestEverPrice && (
                      <Chip
                        icon={<History size={14} />}
                        label={`Historical low: ${gameResult.cheapestEverPrice} (${gameResult.cheapestEverDate})`}
                        size="small"
                        variant="outlined"
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Price comparison header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <TrendingDown size={20} color="#4caf50" />
            <Typography variant="subtitle1">
              Prices across {stores.length} stores
            </Typography>
          </Box>

          {/* Store prices */}
          {stores.map((store, index) => (
            <Card
              key={store.storeId}
              component="a"
              href={store.dealUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                border: index === 0 ? '2px solid #4caf50' : '1px solid',
                borderColor: index === 0 ? '#4caf50' : 'divider',
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.default',
                  flexShrink: 0,
                }}
              >
                {store.storeIcon && (
                  <img
                    src={store.storeIcon}
                    alt={store.storeName}
                    style={{ width: 32, height: 32 }}
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </Box>
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  py: 1.5,
                  '&:last-child': { pb: 1.5 },
                }}
              >
                <Box>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {store.storeName}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={index === 0 ? 'success.main' : 'text.primary'}
                    >
                      {store.price}
                    </Typography>
                    {store.savings && (
                      <Chip
                        label={`-${store.savings}`}
                        size="small"
                        color="success"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    )}
                    {store.price !== store.retailPrice && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: 'line-through' }}
                      >
                        {store.retailPrice}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {index === 0 && (
                    <Chip label="Best Price" size="small" color="success" />
                  )}
                  <ExternalLink size={16} />
                </Box>
              </CardContent>
            </Card>
          ))}

          {stores.length === 0 && (
            <Alert severity="info">
              No prices found for this game. It may not be available on tracked
              stores.
            </Alert>
          )}
        </Stack>
      )}

      {selectedGame && !pricesLoading && !gameResult && (
        <Alert severity="warning">
          Could not fetch prices for this game. Please try again.
        </Alert>
      )}
    </Container>
  );
}
