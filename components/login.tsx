import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, MouseEvent } from 'react';

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

const STEAM_PROVIDER_ID = 'steam';

export default function Login() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      label: 'Sign Out',
      onClick: () => {
        signOut();
      },
    },
  ];

  const { data: session } = useSession();

  if (!session) {
    return (
      <Button onClick={() => signIn(STEAM_PROVIDER_ID)} aria-label="Sign in with Steam">
        Sign in
      </Button>
    );
  }

  const userName = session.user?.name ?? 'User';
  const userImage = session.user?.image;

  const avatar = userImage ? (
    <Avatar
      src={userImage}
      alt={`${userName}'s avatar`}
      sx={{ width: 50, height: 50 }}
    />
  ) : (
    <Avatar sx={{ width: 50, height: 50 }} aria-label={`${userName}'s avatar`}>
      {userName[0]}
    </Avatar>
  );

  return (
    <Box>
      <Tooltip title="Open user menu">
        <IconButton
          onClick={handleOpenUserMenu}
          aria-label="Open user menu"
          aria-controls={anchorElUser ? 'user-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorElUser ? 'true' : undefined}
        >
          {avatar}
        </IconButton>
      </Tooltip>
      <Menu
        id="user-menu"
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem
            key={setting.label}
            onClick={() => {
              setting.onClick();
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
