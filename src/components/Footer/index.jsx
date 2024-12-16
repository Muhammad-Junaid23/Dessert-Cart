import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'hsl(210, 14%, 7%)',
        color: 'white',
        textAlign: 'center',
        py: 2,
      }}
    >
      <Typography variant='body2'>&copy; Foodie {new Date().getFullYear()}. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
