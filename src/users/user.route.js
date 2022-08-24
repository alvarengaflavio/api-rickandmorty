const { authMiddleware } = require('../auth/auth.middleware');
const { UserMiddleware } = require('./user.middleware');
const userController = require('./user.controller');
const router = require('express').Router();

router.get('/', authMiddleware, userController.findAllUsersController);
router.post(
  '/create',
  UserMiddleware.validateUserBody,
  userController.createUserController,
);
//////////////////////////////////////////////////////////////////////
module.exports = router;
