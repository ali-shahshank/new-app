'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const loader = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <IconButton
        setLoading={true}
        loading={loading}
      />
    </Box>
  );
};

export default loader;
