import { User } from './user.model.js';
import { UserEntity } from '../entities/user.entity.js';

export const findAllUsersService = async () => {
  const users = await User.find();
  return users;
};

export const createUserService = async userParam => {
  const userEntity = new UserEntity(userParam);
  const newUser = await User.create(userEntity.getUser());
  return newUser;
};

/////////////////////////////////////////////////////////////////
export const findByEmailService = async email => {
  const user = await User.findOne({ email });
  return user;
};
