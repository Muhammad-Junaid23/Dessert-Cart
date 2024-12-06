import { Box } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Cart from './Cart/Cart';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 8 }}>
          <h1>Desserts</h1>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Cart />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
