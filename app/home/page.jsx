'use client';
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav';
import Box from '@mui/material/Box';

export default function page() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          px: { xs: '16px', sm: '16px', md: '24px' },
          pt: { xs: '48px', sm: '48px', md: '64px' },
          pb: { xs: '24px', sm: '24px', md: '24px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          color="var(--text-dark-primary)"
        >
          Welcome to the Home Page!
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          color="var(--text-dark-secondary)"
        >
          This is the home page content.
        </Typography>
      </Box>
    </>
  );
}
