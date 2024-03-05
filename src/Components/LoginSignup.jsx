import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';


import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

// LostPassword Component
export const LostPassword = ({ onBackToLogin }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Implement password reset request here
            setMessage('If an account with that email was found, we sent an email to reset your password.');
            setEmail(''); // Clear the input field
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="lost-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Send Reset Link</button>
                <button type="button" onClick={onBackToLogin}>Back to Login</button>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

// LoginSignup Component
const LoginSignup = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [action, setAction] = useState("Sign Up");
    const [showLostPassword, setShowLostPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/Signup', { name, email, password });
            setMessage(response.data.message);
            setIsLoggedIn(true); // Set login status to true upon successful sign up
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/Login', { email, password });
            setMessage(response.data.message);
            setIsLoggedIn(true); // Set login status to true upon successful login
        } catch (error) {
            console.error('Error:', error);
            setMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className='text'>{action}</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action === "Sign Up" && (
                    <div className='input'>
                        <img src={user_icon} alt="User" />
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt="Email" />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="Password" />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div className="submit_container">
                <div className="submit" onClick={action === 'Sign Up' ? handleSignup : handleLogin}>
                    {action === "Sign Up" ? "Sign Up" : "Login"}
                </div>
                <div 
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
            <div className="forgot_password" onClick={() => setShowLostPassword(true)}>Forgot Password?</div>
            {message && <div className="message">{message}</div>}
            {showLostPassword && <LostPassword onBackToLogin={() => setShowLostPassword(false)} />}

            {/* Redirect to dashboard upon successful login or sign up */}
            {isLoggedIn && <Redirect to="/dashboard" />}


        </div>
    );
};

export default LoginSignup;
