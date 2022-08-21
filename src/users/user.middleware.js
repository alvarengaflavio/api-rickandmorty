import { UserEntity } from '../entities/user.entity.js';

export class UserMiddleware {
  static validateUserBody(req, res, next) {
    try {
      const user = new UserEntity(req.body);
      user.validate();
      next();
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }
}
