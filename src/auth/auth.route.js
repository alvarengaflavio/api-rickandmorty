const router = require('express').Router();
const { loginController } = require('./auth.controller');
const { authLoginObject } = require('./auth.middleware');

router.post('/login', authLoginObject, loginController);

module.exports = router;
