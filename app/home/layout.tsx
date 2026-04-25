import Box from '@mui/material/Box';

export default function layout() {
  return (
    <>
      <Box>
        <Suspense fallback={<Loading />}></Suspense>
      </Box>
    </>
  );
}
