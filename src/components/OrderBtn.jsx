import { Stack } from '@mui/material';

const OrderBtn = ({ text, bgcolor }) => {
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
    >
      {text}
    </Stack>
  );
};

export default OrderBtn;
