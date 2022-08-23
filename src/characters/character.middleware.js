import { CharacterEntity } from '../entities/character.entity.js';
import { ErrorHandler } from '../.error/error.handler.js';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

export class CharacterMiddleware {
  static validateBody(req, res, next) {
    try {
      const character = new CharacterEntity(req.body);
      character.validate();
      character.user = req.userId;
      req.body = character.getCharacter();
      next();
    } catch (err) {
      ErrorHandler.handleError(err, req, res, next);
    }
  }

  static validateId(req, res, next) {
    try {
      if (!req.params.id)
        throw { name: 'ValidationError', message: 'Missing parameters' };
      if (!ObjectId.isValid(req.params.id))
        throw { name: 'ValidationError', message: 'Invalid Id parameter' };
      next();
    } catch (err) {
      ErrorHandler.handleError(err, req, res, next);
    }
  }

  static validateQuery(req, res, next) {
    try {
      const nameDefault = '';
      if (!req.query.name) req.query.name = nameDefault;
      next();
    } catch (err) {
      ErrorHandler.handleError(err, req, res, next);
    }
  }
}
