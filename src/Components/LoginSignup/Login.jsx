import React, { useState } from 'react';
import axios from 'axios';
import "../../Styles/LoginSignup.css"

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = ({ setAction, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            setMessage(response.data.message);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className="header" >
                <h2 className='text'>Login</h2>
            </div>
            {message && <p className="error">{message}</p>}
            <form onSubmit={handleLogin}>
                <div className="input">
                    <img src={email_icon} alt="Email" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password" />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="submit_container">
                    <button className="submit" type="submit">Login</button>
                </div>
            </form>
            <div className="switch_action">
                <p>Don't have an account? <span onClick={() => setAction('Signup')}>Sign up</span></p>
            </div>
            <div className="forgot_password">
                <p><span onClick={() => setAction('LostPassword')}>Forgot your password?</span></p>
            </div>
        </div>
    );
};

export default Login;
