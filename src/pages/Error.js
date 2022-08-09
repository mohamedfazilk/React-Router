import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <h2>Error</h2>
            <p>Page not Found</p>
            <Link to='/'>Back To Home</Link>
        </section>

    )
}

export default Error