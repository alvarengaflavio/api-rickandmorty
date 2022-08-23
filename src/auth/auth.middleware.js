import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../.error/error.handler.js';
import { AuthEntity } from '../entities/auth.entity.js';
import { User } from '../users/user.model.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      throw { name: 'AuthenticationError', message: 'No token provided' };

    const parts = authHeader.split(' '); // parts[0] = Bearer, parts[1] = token
    if (parts.length !== 2)
      throw { name: 'AuthenticationError', message: 'Token size error' };

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
      throw { name: 'AuthenticationError', message: 'Token format error' };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findByIdAuth(decoded.userId);
    if (!user || !user.id)
      throw { name: 'AuthenticationError', message: 'Invalid token' };

    req.userId = user.id;
    next();
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

//////////////////////////////////////////////////////////////////////////////////////
export const authLoginObject = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = new AuthEntity({ email, password });
    user.validate();
    req.body = user.getAuth();

    next();
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

//////////////////////////////////////////////////////////////////////////////////////
const findByIdAuth = async id => {
  try {
    const user = await User.findOne({ id });
    return user;
  } catch (err) {
    throw { name: 'InternalServerError', message: 'Error finding user' };
  }
};
