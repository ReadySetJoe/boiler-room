import { Box, Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function Home() {
  const freeFeatures = [
    {
      name: 'Search',
      url: '/search',
      description: 'Search for bundles for any game',
    },
    {
      name: 'Library',
      url: '/library',
      description: 'Use your library to search for bundles',
    },
    {
      name: 'Buddies',
      url: '/buddies',
      description: 'Find shared games with you and your friends',
    },
  ];

  const premiumFeatures = [
    {
      name: 'Import Library',
      url: '/twitch/bundles',
      description:
        'Import your full Steam library to find ALL available bundles at once',
    },
    {
      name: 'Multi-Store Search',
      url: '/twitch/multi-store',
      description:
        'Search across Steam, Humble Bundle, Fanatical, and GOG with price comparison',
    },
  ];

  return (
    <Box component="section">
      <Typography variant="h5" sx={{ mb: 3 }}>
        Free Features
      </Typography>

      {/* Free Features */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {freeFeatures.map(page => (
          <Grid item xs={12} sm={6} md={4} key={page.url}>
            <Link href={page.url} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'background-color 0.2s, transform 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{page.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {page.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Premium Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Lock size={20} color="#9146FF" />
        <Typography variant="h5" sx={{ color: '#9146FF' }}>
          Premium Features
        </Typography>
        <Chip
          label="Twitch Sub"
          size="small"
          sx={{
            bgcolor: '#9146FF',
            color: 'white',
            ml: 1,
          }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Unlock these features by subscribing to{' '}
        <Link
          href="https://twitch.tv/joepowers"
          target="_blank"
          rel="noopener noreferrer"
        >
          joepowers
        </Link>{' '}
        on Twitch
      </Typography>

      <Grid container spacing={2}>
        {premiumFeatures.map(page => (
          <Grid item xs={12} sm={6} key={page.url}>
            <Link href={page.url} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  border: '1px solid #9146FF',
                  transition: 'background-color 0.2s, transform 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#9146FF' }}>
                    {page.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {page.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
