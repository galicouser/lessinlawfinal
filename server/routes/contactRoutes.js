const express = require('express');
const { contactController } = require('../controllers/contactController.js');

const router = express.Router();

// Define the route for contact
router.post('/', contactController);

module.exports = router; // Export the router using CommonJS
