'use client';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Nav() {
  const pages = [
    { name: 'Product', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources', icon: <ArrowDropDownIcon /> },
  ];

  return (
    <AppBar
      sx={{
        flexGrow: 1,
        position: 'relative',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          m: 0,
          p: 2,
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          dropShadow: 'none',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: 'var(--text-dark-primary)' }}
        >
          <Link href="/">LOGO</Link>
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {pages.map((page) => (
            <Button
              variant="text"
              key={page.name}
              component={Link}
              href={page.href}
              sx={{
                color: 'var(--text-dark-secondary)',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 400,
                '&:hover': {
                  color: '#000000',
                  backgroundColor: 'var(--background-primary)',
                },
              }}
            >
              {page.name}
              {page.icon}
            </Button>
          ))}
        </Stack>
        <Button
          variant="outlined"
          href="/chat"
          sx={{
            borderRadius: '24px',
            color: 'black',
            borderColor: 'black',
            '&:hover': {
              color: '#ffffff',
              borderColor: '#000000',
              backgroundColor: '#000000',
            },
          }}
        >
          START CHAT
        </Button>
      </Box>
    </AppBar>
  );
}
