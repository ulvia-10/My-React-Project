import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Container = () => {

    const header = () => {
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    }

    const footer = () => {
        <div>This is Footer </div>;
    }

  return (
    <div>
        {header}
        <div>{this.props.children}</div>
        {footer}
      </div>
  )
}

export default Container