// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://SDGPCS09:<>@cluster0.u90jv1y.mongodb.net/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Define a Mongoose model
const User = mongoose.model('User', userSchema);

// Handle signup request
app.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'An error occurred while signing up user' });
    }
});

// Handle login request
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user with the provided email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'An error occurred while logging in' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
