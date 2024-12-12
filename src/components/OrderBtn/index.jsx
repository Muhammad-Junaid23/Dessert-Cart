import { Stack } from '@mui/material';

const OrderBtn = ({ text, bgcolor, modal, handleOpen, handleClose, handleCart, clearCart }) => {
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
        if (modal && handleOpen) handleOpen();
        if (handleCart && clearCart) clearCart();
        handleClose();
      }}
    >
      {text}
    </Stack>
  );
};

export default OrderBtn;
