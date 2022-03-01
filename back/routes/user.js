const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const validator = require('../middleware/validator');

router.post('/signup', validator.email, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;