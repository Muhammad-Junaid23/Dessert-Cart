import { Box, Stack, Typography } from '@mui/material';

const CartItem = ({ name, quantity, price }) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={1.5} pt={1} borderBottom='1px solid hsl(13, 31%, 94%)'>
      <Box>
        <Typography color='rose.900' variant='subtitle1' fontWeight={600}>
          Classic Tiramishu
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='start' alignItems='center' py={0.25}>
          <Typography color='red' fontWeight={600}>
            1x
          </Typography>
          <Typography color='rose.500'>@ $5.50</Typography>
          <Typography color='rose.500' fontWeight={600}>
            $5.50
          </Typography>
        </Stack>
      </Box>
      <img
        src='/img/icon-remove-item.svg'
        alt='remove'
        style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '2px', borderRadius: '50%', cursor: 'pointer' }}
      />
    </Stack>
  );
};

export default CartItem;
