import { Router } from 'express';
import * as characterController from './character.controller.js';
import { CharacterMiddleware as characterMiddleware } from './character.middleware.js';
import { authMiddleware } from '../auth/auth.middleware.js';

export const router = Router();

// FIND ALL CHARACTERS
router.get(
  '/',
  authMiddleware,
  characterMiddleware.validateQuery,
  characterController.findAllCharactersController,
);
// CREATE CHARACTER
router.post(
  '/create',
  authMiddleware,
  characterMiddleware.validateBody,
  characterController.createCharacterController,
);
// FIND BY ID
router.get(
  '/find/:id',
  authMiddleware,
  characterMiddleware.validateId,
  characterController.findByIdController,
);
// UPDATE CHARACTER
router.put(
  '/update/:id',
  authMiddleware,
  characterMiddleware.validateId,
  characterMiddleware.validateBody,
  characterController.updateCharacterController,
);
// DELETE CHARACTER
router.delete(
  '/delete/:id',
  authMiddleware,
  characterMiddleware.validateId,
  characterController.deleteCharacterController,
);
// SEARCH CHARACTERS BY NAME
router.get(
  '/search',
  authMiddleware,
  characterMiddleware.validateQuery,
  characterController.searchCharacterController,
);
