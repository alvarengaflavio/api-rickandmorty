const { UserEntity } = require('../entities/user.entity');
const { ErrorHandler } = require('../.error/error.handler');

class UserMiddleware {
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
/////////////////////////////////////////////////////////////////////
module.exports = { UserMiddleware };
