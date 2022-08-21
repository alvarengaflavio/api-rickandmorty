import express from 'express';
import * as characterController from './character.controller.js';

export const router = express.Router();

router.get('/', characterController.findAllCharactersController);
router.post('/', characterController.createCharacterController);
