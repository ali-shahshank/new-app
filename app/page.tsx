'use client';
import './globals.css';
import Nav from './components/Nav';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          px: { xs: 2, md: 3, lg: 3 },
          py: { xs: 4, md: 6, lg: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: 'var(--text-primary)' }}
        >
          Counsel Ai
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'var(--text-secondary)', textAlign: 'center' }}
        >
          Your AI-powered counseling companion
        </Typography>
        <Button
          href="/chat"
          variant="contained"
          sx={{ borderRadius: '24px' }}
        >
          LEARN MORE
        </Button>
      </Box>
    </>
  );
}
