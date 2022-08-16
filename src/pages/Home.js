import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <h2>Home</h2>
            <Outlet/>
        </section>

    )
}

export default Home