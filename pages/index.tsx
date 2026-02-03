import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const pages = [
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
    {
      name: 'Premium',
      url: '/twitch',
      description: 'Import your library to find ALL bundles',
      premium: true,
    },
  ];

  return (
    <Box component="section">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Steam Boiler Room
      </Typography>
      <Grid container spacing={2}>
        {pages.map(page => (
          <Grid item xs={12} sm={6} md={4} key={page.url}>
            <Link href={page.url} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  border: page.premium ? '2px solid #9146FF' : '1px solid',
                  borderColor: page.premium ? '#9146FF' : 'divider',
                  transition: 'background-color 0.2s, transform 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: page.premium ? '#9146FF' : 'text.primary' }}
                  >
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
