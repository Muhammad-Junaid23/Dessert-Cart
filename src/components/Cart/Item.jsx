import { Box, IconButton, Stack, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const CartItem = ({ item, handleRemove }) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={1.5} pt={1} borderBottom='1px solid hsl(13, 31%, 94%)'>
      <Box>
        <Typography color='rose.900' variant='subtitle1' fontWeight={600}>
          {item?.name}
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='start' alignItems='center' py={0.25}>
          <Typography color='red' fontWeight={600}>
            {item?.qty}x
          </Typography>
          <Typography color='rose.500'>@ ${item?.price}</Typography>
          <Typography color='rose.500' fontWeight={600}>
            ${item?.price * item?.qty}
          </Typography>
        </Stack>
      </Box>
      <IconButton onClick={() => handleRemove(item)}>
        <CancelOutlinedIcon fontSize='small' color='secondary' sx={{ '&:hover': { color: 'rose.900' } }} />
      </IconButton>
    </Stack>
  );
};

export default CartItem;
