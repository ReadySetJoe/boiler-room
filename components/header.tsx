import { Toolbar, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import Login from './login';

const Header = () => {
  return (
    <Toolbar
      sx={{
        paddingTop: '16px',
        paddingBottom: '6px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
      }}
    >
      <Link href="/">
        <Image
          src="/logo-title.svg"
          alt="Steam Boiler Room"
          width={200}
          height={50}
        />
      </Link>
      {/* home link */}
      <Link href="/">
        <Typography
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          Home
        </Typography>
      </Link>
      <Login />
    </Toolbar>
  );
};

export default Header;
