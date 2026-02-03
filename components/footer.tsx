import { Box, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Twitch } from 'lucide-react';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      height: 60,
      borderTop: '1px solid',
      borderColor: 'divider',
      bgcolor: 'background.paper',
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body2">Made by Joe Powers</Typography>
      <IconButton
        href="https://github.com/ReadySetJoe"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        aria-label="Visit GitHub profile"
      >
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton
        href="https://www.twitch.tv/joepowers"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        aria-label="Visit Twitch channel"
        sx={{ color: '#9146FF' }}
      >
        <Twitch size={18} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/joe-powers/"
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        aria-label="Visit LinkedIn profile"
        sx={{ color: '#0A66C2' }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
      <IconButton
        href="mailto:joe.powers92@gmail.com"
        size="small"
        aria-label="Send email"
      >
        <EmailIcon fontSize="small" />
      </IconButton>
    </Stack>
  </Box>
);

export default Footer;
