import { Box, Stack, Typography } from '@mui/material';

const ModalItem = ({ item }) => {
  // const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={1} borderBottom='1px solid hsl(14, 20%, 84%)'>
      <Stack direction='row' spacing={2}>
        <Box height={50} width={50} borderRadius={1} overflow='hidden'>
          <img src={item.image.thumbnail} height='100%' width='100%' alt='modalimg' />
        </Box>
        <Box>
          <Typography color='rose.900' variant='subtitle2' fontWeight={600}>
            {item.name}
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='start' alignItems='center' py={0.5}>
            <Typography color='primary.main' fontWeight={600}>
              {item.qty}x
            </Typography>
            <Typography color='rose.500'>@ ${item.price}</Typography>
          </Stack>
        </Box>
      </Stack>
      <Typography color='rose.900' fontWeight={600} variant='subtitle1'>
        ${item.price * item.qty}
      </Typography>
    </Stack>
  );
};

export default ModalItem;
