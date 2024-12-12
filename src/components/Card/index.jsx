import { Box, Stack, Typography } from '@mui/material';

const Card = ({ item, handleDecrement, handleIncrement }) => {
  const isAddedToCart = item.qty > 0;

  return (
    <Stack alignItems='start' width='100%' height='auto'>
      <Box position='relative'>
        <Box width='100%' borderRadius={3} overflow='hidden'>
          <img src={item?.image?.desktop} height='100%' width='100%' alt='item-image' />
        </Box>
        {!isAddedToCart ? (
          <Stack
            direction='row'
            spacing={1}
            position='absolute'
            bottom={-18}
            py={1.25}
            px={3}
            border='1px solid grey'
            borderRadius={50}
            bgcolor='white'
            width='160px'
            left={'50%'}
            sx={{ transform: 'translateX(-50%)', cursor: 'pointer' }}
            onClick={() => {
              handleIncrement(item);
            }}
          >
            <img src='img/icon-add-to-cart.svg' alt='bucket' />
            <Typography fontWeight={600} variant='subtitle2'>
              Add to Cart
            </Typography>
          </Stack>
        ) : (
          <Stack
            justifyContent='space-between'
            alignItems='center'
            direction='row'
            spacing={1}
            position='absolute'
            bottom={-18}
            py={1.25}
            px={2}
            border='1px solid red'
            borderRadius={50}
            bgcolor='primary.main'
            width='160px'
            left={'50%'}
            sx={{ transform: 'translateX(-50%)', cursor: 'pointer' }}
          >
            <img
              src='img/icon-decrement-quantity.svg'
              alt='minus'
              style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '6px 2px', borderRadius: '50%' }}
              onClick={() => {
                handleDecrement(item);
              }}
            />
            <Typography fontWeight={600} color='rose.100' variant='subtitle2'>
              {item?.qty}
            </Typography>
            <img
              src='img/icon-increment-quantity.svg'
              alt='plus'
              style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '2px 2px', borderRadius: '50%' }}
              onClick={() => {
                handleIncrement(item);
              }}
            />
          </Stack>
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
