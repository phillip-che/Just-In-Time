import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/phillip-che/Just-In-Time">
        Just in time
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundImage: 'linear-gradient(to top right, rgba(249, 177, 177, 0.9), transparent)',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Please vote for us!
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}