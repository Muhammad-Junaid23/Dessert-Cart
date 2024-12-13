import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ item, handleDecrement, handleIncrement }) => {
  const isAddedToCart = item.qty > 0;

  const cartBtnStyle = {
    position: 'absolute',
    bottom: -18,
    py: 1.25,
    px: 3,
    border: '1px solid grey',
    borderRadius: 50,
    bgcolor: 'white',
    width: '160px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <Stack alignItems='start' width='100%' height='auto'>
      <Box position='relative'>
        <Box
          width='100%'
          height={'100%'}
          borderRadius={3}
          overflow='hidden'
          sx={{
            outline: item.qty > 0 ? '2px solid red' : 'none',
          }}
        >
          <img
            src={item?.image?.desktop ?? '/img/illustration-empty-cart.svg'}
            height='100%'
            width='100%'
            alt='item-image'
            style={{ cursor: 'pointer', userSelect: 'none', display: 'block' }}
          />
        </Box>
        {!isAddedToCart ? (
          <Button
            sx={cartBtnStyle}
            variant='contained'
            startIcon={<AddShoppingCartIcon fontSize={'small'} sx={{ color: 'primary.main' }} />}
            onClick={() => {
              handleIncrement(item.id);
            }}
          >
            <Typography fontWeight={600} variant='body2' color='rose.900' textTransform={'capitalize'}>
              Add to Cart
            </Typography>
          </Button>
        ) : (
          <Button
            sx={{
              ...cartBtnStyle,
              bgcolor: 'primary.main',
              width: '150px',
            }}
            variant='contained'
            startIcon={
              <RemoveCircleOutlineOutlinedIcon
                fontSize={'small'}
                sx={{
                  color: 'rose.100',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main',
                    borderRadius: '50%',
                  },
                }}
                onClick={() => {
                  handleDecrement(item.id);
                }}
              />
            }
            endIcon={
              <ControlPointOutlinedIcon
                sx={{
                  color: 'rose.100',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main',
                    borderRadius: '50%',
                  },
                }}
                onClick={() => {
                  handleIncrement(item.id);
                }}
              />
            }
          >
            <Typography fontWeight={600} color='rose.100' variant='subtitle2' width={'50px'}>
              {item?.qty}
            </Typography>
          </Button>
        )}
      </Box>
      <Box mt={4}>
        <Typography color='rose.500' fontWeight={500}>
          {item?.category}
        </Typography>
        <Typography color='rose.900' fontWeight={600}>
          {item?.name}
        </Typography>
        <Typography color='primary.main' fontWeight={600}>
          ${item?.price}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Card;
