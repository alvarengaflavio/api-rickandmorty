import express from 'express';
import * as characterController from './character.controller.js';
import { CharacterMiddleware } from './character.middleware.js';

export const router = express.Router();

router.get('/', characterController.findAllCharactersController);
router.post('/create', characterController.createCharacterController);
router.get('/:id', CharacterMiddleware.validateIdCharacter, characterController.findByIdController);