import React from 'react'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import "../styles/HomeStyle.css"

const Home = () => {
    return (
        <Layout>
            <Box className="container  order">
                <span className='food-web'>Food website</span>
                <span className='best-food'>Best Food in India </span>
                <span className='order-now'><Link to={"/menu"} ><Button className='order-btn' variant="contained">Order now</Button></Link></span>
            </Box>
            <Footer />
        </Layout>
    )
}

export default Home
