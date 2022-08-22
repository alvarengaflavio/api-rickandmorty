import { Router } from 'express';
import { loginController } from './auth.controller.js';
import { authLoginObject } from './auth.middleware.js';

export const router = Router();

router.post('/login', authLoginObject, loginController);
