import { IconButton, Toolbar, Typography, AppBar } from '@mui/material'
import  Box from '@mui/system/Box';
import React from 'react';
import Logo from '../components/Logo';
import useAuth from '../hooks/useAuth';

function MainHeader() {
   const user = useAuth();
  return (
    <Box>
      <AppBar position='static'>
         <Toolbar variant='dense'>
            <IconButton 
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2}}
              >
               <Logo />
            </IconButton>
            <Typography variant='h6' color="inherit" component="div">
                Coder Store
            </Typography>
            <Box sx={{ flexGrow: 1}}/>
            <Typography variant='h6' color="inherit" component="div">
                Welcome {user?.username}!
            </Typography>
         </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MainHeader;