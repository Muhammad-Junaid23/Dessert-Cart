import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Card = () => {
  let [addToCart, setAddToCart] = useState(false);
  let [value, setValue] = useState(1);

  const Increment = () => setValue(value++); // increment value by 1

  const Decrement = () => {
    if (value >= 1) {
      setValue(value--);
    }
    return setValue(value);
  };

  return (
    <Stack alignItems='start'>
      <Box position='relative'>
        <Box height={210} width={230} borderRadius={3} overflow='hidden'>
          <img src='img/image-waffle-desktop.jpg' height='100%' width='100%' alt='dessert' />
        </Box>
        {addToCart ? (
          <Stack
            direction='row'
            spacing={1}
            position='absolute'
            bottom={-20}
            left={40}
            py={1.25}
            px={3}
            border='1px solid grey'
            borderRadius={50}
            bgcolor='white'
            sx={{ cursor: 'pointer' }}
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
            bottom={-20}
            left={40}
            py={1.25}
            px={2}
            border='1px solid red'
            borderRadius={50}
            bgcolor='primary.main'
            width='160px'
            sx={{ cursor: 'pointer' }}
          >
            <img
              src='img/icon-decrement-quantity.svg'
              alt='bucket'
              style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '6px 2px', borderRadius: '50%' }}
              onClick={Decrement}
            />
            <Typography fontWeight={600} color='rose.100' variant='subtitle2'>
              {value}
            </Typography>
            <img
              src='img/icon-increment-quantity.svg'
              alt='bucket'
              style={{ border: '1px solid hsl(14, 25%, 72%)', padding: '2px 2px', borderRadius: '50%' }}
              onClick={Increment}
            />
          </Stack>
        )}
      </Box>
      <Box mt={4}>
        <Typography color='rose.500' fontWeight={500}>
          Waffle
        </Typography>
        <Typography color='rose.900' fontWeight={600}>
          Waffle with Berries
        </Typography>
        <Typography color='primary.main' fontWeight={600}>
          $6.50
        </Typography>
      </Box>
    </Stack>
  );
};

export default Card;
