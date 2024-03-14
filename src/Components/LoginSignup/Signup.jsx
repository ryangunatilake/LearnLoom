import React, { useState } from 'react';
import axios from 'axios';
import "../../Styles/LoginSignup.css"

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Signup = ({ setAction, setIsLoggedIn }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', { name, email, password });
            setMessage(response.data.message);
            setIsLoggedIn(true);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (error.response.status === 400) {
                    // Bad request - e.g., validation error
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes('email already exists')) {
                        setMessage('An account with this email already exists.');
                    } else {
                        setMessage(errorMessage);
                    }
                } else if (error.response.status === 404) {
                    // Not found - e.g., API endpoint not available
                    setMessage('Signup endpoint not found. Please try again later.');
                } else {
                    // Other server errors
                    setMessage('An error occurred. Please try again later.');
                }
            } else if (error.request) {
                // The request was made but no response was received
                setMessage('No response from server. Please check your internet connection and try again.');
            } else {
                // Something happened in setting up the request that triggered an error
                setMessage('An error occurred. Please try again later.');
            }
            console.error('Error:', error);
        }
    };

    return (
        <div className='container'>
            <div className="header" >
                <h2 className='text'>Sign Up</h2>
            </div>
            {message && <p className="error">{message}</p>}
            <form onSubmit={handleSignup}>
                <div className="input">
                    <img src={user_icon} alt="User" />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <button className="submit" type="submit">Sign Up</button>
                </div>
            </form>
            <div className="switch_action">
                <p>Already have an account? <span onClick={() => setAction('Login')}>Login</span></p>
            </div>
        </div>
    );
};

export default Signup;
