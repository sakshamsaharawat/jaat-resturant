import React, { useState } from 'react'
import Layout from '../components/Layout/Layout';

const Color = () => {
    const [color, setColor] = useState("red")
    return (
        <Layout>
            <h1>My Fav Color is {color}</h1>
            <button type="button" onClick={() => setColor("black")}> Black</button>

        </Layout>
    );
};

export default Color;
