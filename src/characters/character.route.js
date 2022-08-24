const router = require('express').Router();
const characterController = require('./character.controller');
const characterMiddleware = require('./character.middleware');
const { authMiddleware } = require('../auth/auth.middleware');

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
///////////////////////////////////////////////////////////
module.exports = router;
