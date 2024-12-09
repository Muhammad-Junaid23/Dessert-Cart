import { Box, Stack, Typography, Modal } from '@mui/material';
import OrderBtn from '../OrderBtn';
import ModalItem from './ModalItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 510,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
  py: 2,
};

const Modale = ({ handleClose, open }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} bgcolor='white' px={4} borderRadius={3}>
        <Typography py={1}>
          <img src='img/icon-order-confirmed.svg' height={30} alt='check' />
        </Typography>
        <Typography variant='h5' fontWeight={900}>
          Order Confirmed
        </Typography>
        <Typography variant='subtitle2' color='rose.500' fontWeight={500}>
          We hope you enjoy your food!
        </Typography>

        <Stack direction='column' spacing={2} my={2} bgcolor='rose.100' borderRadius={2} p={2}>
          <Box
            sx={{
              maxHeight: '213px', // Limit height
              overflowY: 'auto', // Enable vertical scrolling
            }}
          >
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
          </Box>
          <Stack direction='row' py={1} justifyContent='space-between' alignItems='center'>
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
    </Modal>
  );
};

export default Modale;