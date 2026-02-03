import { Box, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Login from './login';

const Header = () => {
  return (
    <Toolbar
      component="nav"
      sx={{
        paddingTop: '16px',
        paddingBottom: '6px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/logo-title.svg"
          alt="Steam Boiler Room logo"
          width={200}
          height={50}
          priority
        />
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Link
          href="/"
          style={{ textDecoration: 'none' }}
          aria-label="Home page"
        >
          <Typography
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
              color: 'text.primary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Home
          </Typography>
        </Link>
        <Login />
      </Box>
    </Toolbar>
  );
};

export default Header;
