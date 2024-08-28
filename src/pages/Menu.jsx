import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Menu = () => {

    return (
        <Layout>
            <h1>chhole bhture</h1>
            <h1>chhole rice</h1>
            <h1>chhole kulche</h1>

            <span className='order-now'><Link to={'/color'} ><Button className='color-change' variant="contained">change color</Button></Link></span>
        </Layout>
    )
}

export default Menu
