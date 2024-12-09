import { Stack } from '@mui/material';

const OrderBtn = ({ text, bgcolor, modal, handleOpen }) => {
  return (
    <Stack
      py={2}
      borderRadius={10}
      color='white'
      textAlign={'center'}
      fontWeight={600}
      bgcolor={bgcolor}
      fullWidth
      sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
      onClick={modal && handleOpen}
    >
      {text}
    </Stack>
  );
};

export default OrderBtn;
