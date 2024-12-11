import { useState } from 'react';
import { Grid2, Box, Typography } from '@mui/material';
import Cart from './Cart/Cart';
import Card from './Card';
import data from '../data.json';

const Layout = () => {
  const [Data, setData] = useState(data);
  const [cart, setCart] = useState([]);

  const handleIncrement = (val) => {
    setCart((prevCart) => {
      const exist = prevCart.find((x) => x.id === val.id);
      if (exist) {
        return prevCart.map((x) => (x.id === val.id ? { ...x, qty: x.qty + 1 } : x));
      } else {
        return [...prevCart, { ...val, qty: 1 }];
      }
    });

    setData((prevData) => {
      return prevData.map((x) => (x.id === val.id ? { ...x, qty: (x.qty || 0) + 1 } : x));
    });
  };

  const handleDecrement = (val) => {
    setCart((prevCart) => {
      const exist = prevCart.find((x) => x.id === val.id);
      if (exist && exist.qty > 1) {
        return prevCart.map((x) => (x.id === val.id ? { ...x, qty: x.qty - 1 } : x));
      } else {
        return prevCart.filter((x) => x.id !== val.id); // Remove item if qty is 1
      }
    });

    setData((prevData) => {
      return prevData.map((x) => (x.id === val.id ? { ...x, qty: Math.max((x.qty || 0) - 1, 0) } : x));
    });
  };

  const handleRemove = (val) => {
    setCart((prevCart) => prevCart.filter((x) => x.id !== val.id));

    setData((prevData) => prevData.map((x) => (x.id === val.id ? { ...x, qty: 0 } : x)));
  };
  const clearCart = () => {
    setCart([]);
    setData(data);
  };

  return (
    <Box sx={{ flexGrow: 1 }} mt={8}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 8 }}>
          <Typography variant='h4' fontWeight={700} mb={'16px'}>
            Desserts
          </Typography>
          <Grid2 container gap={2} spacing={2} direction={{ direction: { xs: 'column' } }} mb={5}>
            {Data.map((item, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} position={{ md: 'fixed', xl: 'static' }} right={{ md: '1rem' }}>
          <Cart cart={cart} handleRemove={handleRemove} clearCart={clearCart} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
