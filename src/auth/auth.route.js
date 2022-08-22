import { Router } from 'express';
import { loginController } from './auth.controller.js';

export const router = Router();

router.post('/login', loginController);
