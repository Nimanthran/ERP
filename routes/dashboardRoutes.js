const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

// Routes
router.get('/', dashboardController.dashboard);

module.exports = router;