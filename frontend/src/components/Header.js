import  React, {useState, handleClick} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { ListItemText, Menu, MenuItem, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'linear-gradient(90deg, rgba(36,0,6,1) 0%, rgba(8,69,111,1) 16%, rgba(9,121,120,1) 50%, rgba(24,158,200,1) 100%);'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto APP
          </Typography>
          <Tab LinkComponent={Link} to="/history" label="History"/>  
          <Tab LinkComponent={Link} to="/wallet" label="Wallet"/>  
          <ListItemText
                  
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}>
                    <AccountCircleIcon  size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transition: '0.2s',
                  }}
                />
                
            </AccountCircleIcon>
            <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
                  </ListItemText>
        
         
                
        </Toolbar>
      </AppBar>
      <Typography>
        Dashborad
      </Typography>
    </Box>
  );
}

export default Header
