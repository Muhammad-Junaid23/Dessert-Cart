import { useState } from 'react';
import { Grid2, Box, Typography } from '@mui/material';
import Cart from '.././Cart';
import Card from '.././Card';
import data from '../../data.json';

const Layout = () => {
  const [jsonData, setJsonData] = useState(data);

  const handleIncrement = (itemId) => {
    setJsonData((prevData) => prevData.map((item) => (item.id === itemId ? { ...item, qty: item.qty + 1 } : item)));
  };

  const handleDecrement = (itemId) => {
    setJsonData((prevData) => prevData.map((item) => (item.id === itemId && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item)));
  };

  const handleRemove = (val) => {
    setJsonData((prevData) => prevData.map((x) => (x.id === val.id ? { ...x, qty: 0 } : x)));
  };
  const clearCart = () => {
    setJsonData(data);
  };

  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 8 }}>
          <Typography variant='h4' fontWeight={700} mb={'16px'}>
            Desserts
          </Typography>
          <Grid2 container gap={2} spacing={2} direction={{ direction: { xs: 'column' } }} mb={5}>
            {jsonData.map((item, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} position={{ md: 'fixed', xl: 'static' }} right={{ md: '1rem' }}>
          <Cart jsonData={jsonData} handleRemove={handleRemove} clearCart={clearCart} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
