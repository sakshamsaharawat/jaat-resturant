import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyle.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: ' center', border: " 2px solid red" }} >
            <Typography color={'#00cccc'} variant='h5' component={'div'} sx={{ flexGrow: 1 }}>
                <FastfoodIcon />
                JAAT RESTURANT
            </Typography>

            <ul className='mobile-navigation-menu'>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </Box>
    )

    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: '#00111a' }}>
                    <Toolbar>
                        <IconButton aria-label='open drawer' edge='start'
                            sx={{
                                color: '#00cccc',
                                mr: 2, display: { sm: 'none' }
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'#00cccc'} variant='h5' component={'div'} sx={{ flexGrow: 1 }}>
                            <FastfoodIcon />
                            JAAT RESTURANT
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                            <ul className='navigation-menu'>
                                <li><Link to={'/home'}>Home</Link></li>
                                <li><Link to={'/menu'}>Menu</Link></li>
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box style={{ border: "2px solid red" }} component='nav'>
                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" } }}>
                        {drawer}
                    </Drawer>
                </Box>
            </Box>

        </>
    )
}

export default Header
