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
      const defaultQuery = { name: '', offset: 0, limit: 6 };
      let { offset, limit, name } = req.query;
      [offset, limit] = [offset, limit].map(Number);
      if (!name) name = defaultQuery.name;
      if (!offset) offset = defaultQuery.offset;
      if (!limit) limit = defaultQuery.limit;
      if (offset < 0 || limit < 0)
        throw { name: 'ValidationError', message: 'Invalid query parameters' };
      req.query = { name, offset, limit };

      next();
    } catch (err) {
      ErrorHandler.handleError(err, req, res, next);
    }
  }
}
