import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import logo from'../assets/logo.jfif';
const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '40px', marginRight: '16px' }} // Adjust height and margin as needed
                />
                </Typography>
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
                <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
