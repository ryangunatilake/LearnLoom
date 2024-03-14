import React, { useState } from 'react';
import "../../Styles/LoginSignup.css"

const LostPassword = ({ onBackToLogin }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage('If an account with that email was found, we sent an email to reset your password.');
            setEmail('');
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            <div className="switch-action">
                <p><span onClick={onBackToLogin}>Back to Login</span></p>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default LostPassword;
