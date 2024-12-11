import { Stack } from '@mui/material';

const OrderBtn = ({ text, bgcolor, modal, handleOpen, handleCart, clearCart }) => {
  return (
    <Stack
      py={2}
      borderRadius={10}
      color='white'
      textAlign={'center'}
      fontWeight={600}
      bgcolor={bgcolor}
      fullwidth
      sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
      onClick={() => {
        modal && handleOpen();
        handleCart && clearCart();
      }}
    >
      {text}
    </Stack>
  );
};

export default OrderBtn;
