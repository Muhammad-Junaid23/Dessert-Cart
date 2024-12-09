import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Cart from './Cart/Cart';
import Card from './Card';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 8 }}>
          <Typography variant='h4' fontWeight={700} mb={'16px'}>
            Desserts
          </Typography>
          <Grid2 container gap={2} spacing={2} direction={{ direction: { xs: 'column' } }}>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Cart />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
