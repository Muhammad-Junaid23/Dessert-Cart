import { useState } from 'react';
import { Grid2, Box, Typography } from '@mui/material';
import Cart from './Cart/Cart';
import Card from './Card';
import data from '../data.json';

const Layout = () => {
  const [Data, setData] = useState(data);
  const [cart, setCart] = useState([]);

  const handleIncrement = (val) => {
    const exist = cart.find((x) => x.id === val.id);

    if (exist) {
      setCart(cart.map((x) => (x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x)));
      setData(Data.map((x) => (x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCart([...cart, { ...val, qty: 1 }]);
      setData([...Data, { ...val, qty: 1 }]);
    }
  };

  const handleDecrement = (val) => {
    const exist = cart.find((x) => x.id === val.id);
    if (exist.qty === 0) {
      setCart(cart);
      setData(Data);
    } else {
      setCart(cart.map((x) => (x.id === val.id ? { ...exist, qty: exist.qty - 1 } : x)));
      setData(Data.map((x) => (x.id === val.id ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  };

  const handleRemove = (val) => {
    setCart(cart.filter((x) => x.id !== val.id));
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
            {/* Map through data.json and render cards */}
            {Data.map((item, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Cart cart={cart} handleRemove={handleRemove} clearCart={clearCart} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
