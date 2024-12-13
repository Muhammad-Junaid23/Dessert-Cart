import { Box, Stack, Typography, Modal as MuiModal, IconButton } from '@mui/material';
import OrderBtn from '../OrderBtn';
import ModalItem from './Item';

const style = {
  position: 'absolute',
  top: { xs: '', sm: '50%' },
  left: { xs: '0%', sm: '50%' },
  bottom: { xs: '0', sm: '-33%' },
  transform: { xs: 'translate(0%, 0%)', sm: 'translate(-50%, -50%)' },
  bgcolor: 'background.paper',
  py: 2,
};

const Modal = ({ handleClose, open, total, cart, clearCart }) => {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box
        sx={style}
        width={{ xs: '100%', sm: '510px' }}
        height={'fit-content'}
        maxHeight={'550px'}
        bgcolor='white'
        px={{ xs: 2, sm: 4 }}
        borderRadius={3}
      >
        <IconButton sx={{ ml: '-8px' }}>
          <img src='img/icon-order-confirmed.svg' height={30} alt='check' />
        </IconButton>
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

        <OrderBtn text='Start New Order' handleClose={handleClose} handleCart={true} clearCart={clearCart} />
      </Box>
    </MuiModal>
  );
};

export default Modal;
