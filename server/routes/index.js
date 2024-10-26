const express = require('express');
const contactRoutes = require('./contactRoutes.js');

const router = express.Router();

// Use the imported routes
router.use('/contact', contactRoutes);

module.exports = router; // Export the router using CommonJS
