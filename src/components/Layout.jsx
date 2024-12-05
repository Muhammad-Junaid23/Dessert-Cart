import { Box } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 9 }}>
          <h1>Desserts</h1>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <h1>item 1 in grid col</h1>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
