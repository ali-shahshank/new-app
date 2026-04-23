import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 5,
        }}
      >
        <p>Page not Found.</p>
        <Box></Box>
        <Button
          variant="contained"
          color="primary"
        >
          Try Again
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
