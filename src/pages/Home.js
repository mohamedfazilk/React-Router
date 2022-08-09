import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <h2>Home</h2>
            <Link to='/about' className='btn'>About</Link>
        </section>

    )
}

export default Home