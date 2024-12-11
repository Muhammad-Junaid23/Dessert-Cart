import { Box, Stack, Typography } from '@mui/material';

const CartItem = ({ item, handleRemove }) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={1.5} pt={1} borderBottom='1px solid hsl(13, 31%, 94%)'>
      <Box>
        <Typography color='rose.900' variant='subtitle1' fontWeight={600}>
          {item.name}
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='start' alignItems='center' py={0.25}>
          <Typography color='red' fontWeight={600}>
            {item.qty}x
          </Typography>
          <Typography color='rose.500'>@ ${item.price}</Typography>
          <Typography color='rose.500' fontWeight={600}>
            ${item.price * item.qty}
          </Typography>
        </Stack>
      </Box>
      <img
        src='/img/icon-remove-item.svg'
        alt='remove'
        style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '2px', borderRadius: '50%', cursor: 'pointer' }}
        onClick={() => handleRemove(item)}
      />
    </Stack>
  );
};

export default CartItem;
