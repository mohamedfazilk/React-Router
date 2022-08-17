import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { productId } = useParams();
    return (
        <section>
            <h2>SingleProducts</h2>
        </section>

    )
}

export default SingleProduct