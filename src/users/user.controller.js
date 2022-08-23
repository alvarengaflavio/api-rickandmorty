import * as userService from './user.service.js';
import { ErrorHandler } from '../.error/error.handler.js';
import { generateToken } from '../auth/auth.service.js';

export const findAllUsersController = async (req, res, next) => {
  try {
    const users = await userService.findAllUsersService();
    if (!users.length)
      throw { name: 'NotFoundError', message: 'No users found' };

    res.status(200).send({ users });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const createUserController = async (req, res, next) => {
  try {
    const foundUser = await userService.findByEmailService(req.body.email);
    if (foundUser)
      throw { name: 'ConflictError', message: 'User already exists' };

    const user = await userService.createUserService(req.body);
    if (!user) {
      throw { name: 'InternalServerError', message: 'User not created' };
    }
    const token = generateToken(user.id);

    res.status(201).send({ user, token });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};
