import { Box, Stack, Typography, Modal } from '@mui/material';
import OrderBtn from '../OrderBtn';
import ModalItem from './ModalItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  py: 2,
};

const Modale = ({ handleClose, open, total, cart, clearCart }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} width={{ xs: '95%', sm: '510px' }} bgcolor='white' px={{ xs: 2, sm: 4 }} borderRadius={3}>
        <Typography py={1}>
          <img src='img/icon-order-confirmed.svg' height={30} alt='check' />
        </Typography>
        <Typography variant='h5' fontWeight={900}>
          Order Confirmed
        </Typography>
        <Typography variant='subtitle2' color='rose.500' fontWeight={500}>
          We hope you enjoy your food!
        </Typography>

        <Stack direction='column' spacing={2} my={2} bgcolor='rose.100' borderRadius={2} p={{ xs: 0.5, md: 2 }}>
          <Box
            sx={{
              maxHeight: '213px',
              overflowY: 'auto',
            }}
          >
            {cart?.map((item) => (
              <ModalItem item={item} />
            ))}
          </Box>
          <Stack direction='row' py={1} justifyContent='space-between' alignItems='center'>
            <Typography color='rose.500' variant='subtitle1' align='center' fontWeight={100}>
              Order Total
            </Typography>
            <Typography color='rose.900' variant='h5' fontWeight={900}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>

        <OrderBtn text='Start New Order' bgcolor='primary.main' handleClose={handleClose} handleCart={true} clearCart={clearCart} />
      </Box>
    </Modal>
  );
};

export default Modale;
