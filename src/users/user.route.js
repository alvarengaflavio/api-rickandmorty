import { authMiddleware } from '../auth/auth.middleware.js';
import { Router } from 'express';
import { UserMiddleware } from './user.middleware.js';
import * as userController from './user.controller.js';

export const router = Router();

router.get('/', authMiddleware, userController.findAllUsersController);
router.post(
  '/create',
  UserMiddleware.validateUserBody,
  userController.createUserController,
);
