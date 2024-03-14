import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import LostPassword from './LostPassword';
import "../../Styles/LoginSignup.css"
// LoginSignup Component
const LoginSignup = () => {
    const [message, setMessage] = useState('');
    const [action, setAction] = useState("Login");
    const [showLostPassword, setShowLostPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

    useEffect(() => {
        // You might want to include some logic here to check if the user is already logged in
        // If so, redirect them to the dashboard
    }, []);

    return (
        <div>
            {action === "Login" && (
                <Login setAction={setAction} setMessage={setMessage} setIsLoggedIn={setIsLoggedIn} />
            )}
            {action === "Signup" && (
                <Signup setAction={setAction} setMessage={setMessage} setIsLoggedIn={setIsLoggedIn} />
            )}
            {action === "LostPassword" && (
                <LostPassword onBackToLogin={() => setAction("Login")} />
            )}

            {message && <div className="message">{message}</div>}
            {isLoggedIn && <Navigate to="/dashboard" />}
        </div>
    );
};

export default LoginSignup;
