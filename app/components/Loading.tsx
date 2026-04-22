'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const loading = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

export default loading;
