import * as authService from './auth.service.js';
import { findByEmailLogin } from '../users/user.service.js';
import bcrypt from 'bcrypt';

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findByEmailLogin(email);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Invalid password' });
    }

    const token = await authService.generateToken(user.id);
    res.status(200).send({ token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
