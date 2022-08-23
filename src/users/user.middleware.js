import { UserEntity } from '../entities/user.entity.js';
import { ErrorHandler } from '../.error/error.handler.js';

export class UserMiddleware {
  static validateUserBody(req, res, next) {
    try {
      const user = new UserEntity(req.body);
      user.validate();
      req.body = user.getUser();
      next();
    } catch (err) {
      ErrorHandler.handleError(err, req, res, next);
    }
  }
}
