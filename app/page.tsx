'use client';
import './globals.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Nav from './components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <Typography
        variant="h4"
        component="h4"
      >
        Welcome to Next.js!
      </Typography>
      <Link href="/about">Go to about page</Link>
    </>
  );
}
