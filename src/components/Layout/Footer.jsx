import { Box, Typography } from '@mui/material'
import React from 'react'
import "../../styles/FooterStyle.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (

        <>
            <Box className="footer-box" >
                <Box className="footer-icon">
                    <InstagramIcon />
                    <YouTubeIcon />
                    <GitHubIcon />
                    <TwitterIcon />
                </Box>
                <Typography>
                    All Rights Reserved &copy; Techinfo YT
                </Typography>
            </Box>

        </>

    )
}

export default Footer
