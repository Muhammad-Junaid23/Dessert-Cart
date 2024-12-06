import { Box, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Cart from './Cart/Cart';
import Card from './Card';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 8 }}>
          <Typography variant='h4' fontWeight={700}>
            Desserts
          </Typography>
          <Stack my={3} direction='row' gap={3} justifyContent='start' alignItems='start' flexWrap='wrap'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Cart />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
