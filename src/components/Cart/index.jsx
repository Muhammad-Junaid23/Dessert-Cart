import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CartItem from './CartItem';
import OrderBtn from '../OrderBtn';
import Modale from '.././Modal';

const Cart = ({ handleRemove, cart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Box p={3} pt={1.5} bgcolor='white' width='100%' borderRadius={3} maxWidth={{ md: '380px', xl: '100%' }}>
      <Typography variant='h5' color='primary' pb={0.5} fontWeight={900}>
        Your Cart ({cart?.length})
      </Typography>
      {cart?.length === 0 ? (
        <Stack pt={4} justifyContent='center' alignItems='center' direction='column'>
          <img src='/img/illustration-empty-cart.svg' alt='empty cart' />
          <Typography py={2} color='rose.500' variant='subtitle2' align='center' fontWeight={600}>
            Your added items will appear here
          </Typography>
        </Stack>
      ) : (
        <>
          <Box
            sx={{
              maxHeight: '231px',
              overflowY: 'auto',
            }}
          >
            {cart?.map((item) => (
              <CartItem item={item} handleRemove={handleRemove} />
            ))}
          </Box>

          <Stack direction='row' my={2} justifyContent='space-between' alignItems='center'>
            <Typography color='rose.500' variant='subtitle1' align='center' fontWeight={100}>
              Order Total
            </Typography>
            <Typography color='rose.900' variant='h5' fontWeight={900}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
          <Stack direction='row' justifyContent='center' alignItems='start' px={2} my={2} borderRadius={2.5} py={1.5} bgcolor='rose.100'>
            <img src='img/icon-carbon-neutral.svg' alt='tree' />
            <Typography pl={0.5} color='rose.500' variant='subtitle2' fontWeight={100}>
              This is a <strong>carbon-neutral</strong> delivery
            </Typography>
          </Stack>
          <OrderBtn text='Confirm Order' modal={true} handleOpen={handleOpen} bgcolor='primary.main' />
          <Modale handleClose={handleClose} open={open} cart={cart} total={total} clearCart={clearCart} />
        </>
      )}
    </Box>
  );
};

export default Cart;
