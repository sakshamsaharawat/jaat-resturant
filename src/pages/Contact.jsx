import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import "../styles/ContactStyle.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
    return (
        <Layout>
            <Box className="container contact-page">
                <Typography>
                    <EmailIcon />
                    jaat0008@gmail.com
                </Typography>
                <Typography>
                    <PhoneIcon />
                    +919999008877
                </Typography>
                <h4>Distt: Saharanpur, Uttar Pradesh</h4>
                <h3>Near Ghanta Ghar , ShopeNo 29929399</h3>
            </Box>

        </Layout>
    )
}

export default Contact
