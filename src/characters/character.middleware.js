import { CharacterEntity } from '../entities/character.entity.js';
import mongoose from 'mongoose';

export class CharacterMiddleware {
  static validateBodyCharacter(req, res, next) {
    try {
      CharacterEntity.validateJson(req.body);
      next();
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  static validateIdCharacter(req, res, next) {
    try {
      if (!req.params.id) {
        return res.status(400).send({ message: 'Missing parameters' });
      }
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'Invalid Id parameter' });
      }
      next();
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
}
