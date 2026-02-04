import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { GetBundlesByGameNameDocument } from '../../generated/graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BundleDetailPage() {
  const router = useRouter();
  const { name } = router.query;
  const gameName = typeof name === 'string' ? decodeURIComponent(name) : '';

  const { data, loading, error } = useQuery(GetBundlesByGameNameDocument, {
    variables: { name: gameName },
    skip: !gameName,
  });

  return (
    <Container component="main">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{ mb: 2 }}
        aria-label="Go back to previous page"
      >
        Back
      </Button>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Bundles containing "{gameName}"
      </Typography>

      {loading && (
        <Stack spacing={2}>
          {[1, 2, 3].map(i => (
            <Skeleton key={i} variant="rectangular" height={100} />
          ))}
        </Stack>
      )}

      {error && (
        <Typography color="error">
          Failed to load bundles. Please try again.
        </Typography>
      )}

      {!loading && !error && data?.getBundlesByGameName.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No bundles found for "{gameName}"
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            This game may not be available in any bundles on Steam.
          </Typography>
        </Box>
      )}

      <Grid container spacing={2}>
        {data?.getBundlesByGameName.map(bundle => (
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
              {bundle.image ? (
                <CardMedia
                  component="img"
                  sx={{ width: 128, objectFit: 'contain' }}
                  image={bundle.image}
                  alt={bundle.name}
                />
              ) : (
                <Box
                  sx={{
                    width: 128,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'action.hover',
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    No image
                  </Typography>
                </Box>
              )}
              <CardContent>
                <Typography variant="subtitle1" fontWeight={500}>
                  {bundle.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bundle.price}
                </Typography>
                {bundle.discount && (
                  <Typography variant="body2" color="success.main">
                    {bundle.discount}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
