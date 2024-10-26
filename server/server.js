const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/index.js'); // Import your routes

const app = express();

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.use(cors({
  origin: '*', // Allows requests from any origin
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static file serving
app.use(express.static(path.join(__dirname, '../dist')));

// Use routes
app.use('/api', routes);

module.exports = app; // Export the app using CommonJS
