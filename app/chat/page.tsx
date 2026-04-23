'use client';

import Box from '@mui/material/Box';
import Textfield from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Page() {
  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, padding: 5 }}>
        <Textfield
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </Box>
    </>
  );
}
