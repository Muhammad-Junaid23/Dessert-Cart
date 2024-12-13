import { Button, Stack } from '@mui/material';

const btnStyle = {
  py: 1.7,
  borderRadius: 10,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
  bgcolor: 'primary.main',
  textTransform: 'capitalize',
  cursor: 'pointer',
};

const OrderBtn = ({ text, modal, handleOpen, handleClose, handleCart, clearCart }) => {
  return (
    <Button
      onClick={() => {
        if (modal && handleOpen) handleOpen();
        if (handleCart && clearCart) clearCart();
        handleClose();
      }}
      sx={btnStyle}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default OrderBtn;
