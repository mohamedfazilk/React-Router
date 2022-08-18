import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <section>
            <h2>Login</h2>
        </section>

    )
}

export default Login