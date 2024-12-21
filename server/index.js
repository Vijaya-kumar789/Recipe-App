const express = require('express');
const userRoute = require('../server/Routes/userRoute')
const recipeRoute = require('../server/Routes/recipeRoute')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
// Middleware
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_SITE_URL,
    credentials: true,
}));

// Routes
app.use('/api/v1', userRoute);
app.use('/api/v1/recipe', recipeRoute )

const connectToDatabaseAndStartServer = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');
        // Start the server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Call the function
connectToDatabaseAndStartServer();
