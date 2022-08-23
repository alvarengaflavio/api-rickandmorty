import jwt from 'jsonwebtoken';
import { User } from '../users/user.model.js';


export const findByEmailLogin = async email => {
  const user = await User.findOne({ email }).select('+password');
  return user;
};

/////////////////////////////////////////////////////////////////////
// SERVICE: AuthService
export const generateToken = userId => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 84600,
  });
  return token;
};
