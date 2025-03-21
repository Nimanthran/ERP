const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// Routes
router.get('/', loginController.login);

module.exports = router;