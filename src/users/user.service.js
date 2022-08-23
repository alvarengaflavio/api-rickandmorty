import { User } from './user.model.js';

export const findAllUsersService = async () => {
  const users = await User.find();
  return users;
};

export const createUserService = async userParam => {
  const newUser = await User.create(userParam);
  return newUser;
};

/////////////////////////////////////////////////////////////////
export const findByEmailService = async email => {
  const user = await User.findOne({ email });
  return user;
};

export const findByIdService = async id => {
  const user = await User.findById(id);
  return user;
};
