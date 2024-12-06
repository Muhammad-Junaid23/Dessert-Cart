import { Box, Stack, Typography } from '@mui/material';
import OrderBtn from '../OrderBtn';
import ModalItem from './ModalItem';

const Modal = () => {
  return (
    <Box
      position='absolute'
      top='0%'
      left='0%'
      width='100%'
      height='1200px'
      display='flex'
      justifyContent='center'
      alignItems='start'
      bgcolor='rgba(0,0,0,0.5)'
    >
      <Box bgcolor='white' width='600px' mt={5} py={3} px={4} borderRadius={3}>
        <Typography py={2}>
          <img src='img/icon-order-confirmed.svg' alt='check' />
        </Typography>
        <Typography variant='h4' fontWeight={900}>
          Order Confirmed
        </Typography>
        <Typography variant='subtitle1' color='rose.500' fontWeight={500}>
          We hope you enjoy your food!
        </Typography>

        <Stack direction='column' spacing={2} my={3} bgcolor='rose.100' borderRadius={2} p={2}>
          <ModalItem />
          <ModalItem />
          <ModalItem />
          <Stack direction='row' my={3} py={1} justifyContent='space-between' alignItems='center'>
            <Typography color='rose.500' variant='subtitle1' align='center' fontWeight={100}>
              Order Total
            </Typography>
            <Typography color='rose.900' variant='h5' fontWeight={900}>
              $46.50
            </Typography>
          </Stack>
        </Stack>

        <OrderBtn text='Start New Order' bgcolor='primary.main' />
      </Box>
    </Box>
  );
};

export default Modal;
