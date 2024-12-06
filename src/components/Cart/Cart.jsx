import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CartItem from './CartItem';
import OrderBtn from '../OrderBtn';

const Cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <Box p={3} bgcolor='white' width='100%' borderRadius={3}>
      <Typography variant='h5' color='primary' pb={1} fontWeight={900}>
        Your Cart (0)
      </Typography>
      {cart ? (
        <Stack pt={4} justifyContent='center' alignItems='center' direction='column'>
          <img src='/img/illustration-empty-cart.svg' alt='empty cart' />
          <Typography py={2} color='rose.500' variant='subtitle2' align='center' fontWeight={600}>
            Your added items will appear here
          </Typography>
        </Stack>
      ) : (
        <>
          <CartItem />
          <CartItem />
          <CartItem />
          <Stack direction='row' my={3} justifyContent='space-between' alignItems='center'>
            <Typography color='rose.500' variant='subtitle1' align='center' fontWeight={100}>
              Order Total
            </Typography>
            <Typography color='rose.900' variant='h5' fontWeight={900}>
              $46.50
            </Typography>
          </Stack>
          <Stack direction='row' justifyContent='center' alignItems='start' px={2} my={2.5} borderRadius={2.5} py={1.5} bgcolor='rose.100'>
            <img src='img/icon-carbon-neutral.svg' alt='tree' />
            <Typography pl={0.5} color='rose.500' variant='subtitle2' fontWeight={100}>
              This is a <strong>carbon-neutral</strong> delivery
            </Typography>
          </Stack>
          <OrderBtn text='Confirm Order' bgcolor='primary.main' />
        </>
      )}
    </Box>
  );
};

export default Cart;
