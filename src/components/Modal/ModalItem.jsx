import { Box, Stack, Typography } from '@mui/material';

const ModalItem = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={1} borderBottom='1px solid hsl(14, 20%, 84%)'>
      <Stack direction='row' spacing={2}>
        <Box height={50} width={50} borderRadius={1} overflow='hidden'>
          <img src='/img/image-waffle-thumbnail.jpg' height='100%' width='100%' alt='modalimg' />
        </Box>
        <Box>
          <Typography color='rose.900' variant='subtitle2' fontWeight={600}>
            Classic Tiramishu
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='start' alignItems='center' py={0.5}>
            <Typography color='primary.main' fontWeight={600}>
              1x
            </Typography>
            <Typography color='rose.500'>@ $5.50</Typography>
          </Stack>
        </Box>
      </Stack>
      <Typography color='rose.900' fontWeight={600} variant='subtitle1'>
        $5.50
      </Typography>
    </Stack>
  );
};

export default ModalItem;
