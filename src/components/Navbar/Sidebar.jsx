import { useState } from 'react';
import { NavLink } from 'react-router';
import { IconButton, Stack, Typography, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar({ pages }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} px={2} pt={2} spacing={2}>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='#'
          sx={{
            mr: 2,
            fontWeight: 900,
            letterSpacing: '.1rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Foodie
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItem key={page} disablePadding>
              <ListItemButton>
                <NavLink
                  to={page.path}
                  key={page.name}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? 'Black' : 'Grey',
                  })}
                >
                  <ListItemText primary={page.name} />
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={toggleDrawer(true)}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  );
}
