import { Router } from 'express';
import * as characterController from './character.controller.js';
import { CharacterMiddleware } from './character.middleware.js';
import { authMiddleware } from '../auth/auth.middleware.js';

export const router = Router();

// FIND ALL CHARACTERS
router.get(
  '/',
  authMiddleware,
  characterController.findAllCharactersController,
);
// CREATE CHARACTER
router.post(
  '/create',
  authMiddleware,
  CharacterMiddleware.validateBody,
  characterController.createCharacterController,
);
// FIND BY ID
router.get(
  '/find/:id',
  authMiddleware,
  CharacterMiddleware.validateId,
  characterController.findByIdController,
);
// UPDATE CHARACTER
router.put(
  '/update/:id',
  CharacterMiddleware.validateId,
  CharacterMiddleware.validateBody,
  authMiddleware,
  characterController.updateCharacterController,
);
// DELETE CHARACTER
router.delete(
  '/delete/:id',
  authMiddleware,
  CharacterMiddleware.validateId,
  characterController.deleteCharacterController,
);
