// db.js

const mongoose = require('mongoose');


// Connection URI for MongoDB Atlas
const MONGODB_URI = `mongodb+srv://SDGPCS09:SDGPcs09@cluster0.u90jv1y.mongodb.net/database`;

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Define a Mongoose model
const User = mongoose.model('User', userSchema);

// Establishing connection to MongoDB Atlas
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Checking for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas successfully!');
});

module.exports = { User };
