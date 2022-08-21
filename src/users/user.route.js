import { Router } from 'express';
import * as userController from './user.controller.js';
import { UserMiddleware } from './user.middleware.js';

export const router = Router();

router.get('/', userController.findAllUsersController);
router.post(
  '/create',
  UserMiddleware.validateUserBody,
  userController.createUserController,
);
