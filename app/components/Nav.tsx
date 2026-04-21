'use client';

import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Nav() {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Chat', href: '/chat' },
  ];

  return (
    <AppBar sx={{ flexGrow: 1, position: 'relative' }}>
      <Box
        sx={{
          m: 0,
          p: 2,
          bgcolor: 'var(--background-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: 'var(--text-primary)' }}
        >
          My App
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              href={page.href}
              sx={{ color: 'var(--text-primary)' }}
            >
              {page.name}
            </Button>
          ))}
        </Stack>
        <Button
          variant="outlined"
          href="/chat"
        >
          START CHAT
        </Button>
      </Box>
    </AppBar>
  );
}
