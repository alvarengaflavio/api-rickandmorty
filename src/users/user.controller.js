import * as userService from './user.service.js';

export const findAllUsersController = async (req, res) => {
  try {
    const users = await userService.findAllUsersService();
    if (!users.length) {
      return res.status(404).send({ message: 'No users found' });
    }
    res.status(200).send({ users });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const { email } = req.body;
    const foundUser = await userService.findByEmailService(email);
    if (foundUser) {
      throw new Error('User already exists');
    }
    const user = await userService.createUserService(req.body);
    if (!user) {
      throw new Error('User not created');
    }
    res.status(201).send({ user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
