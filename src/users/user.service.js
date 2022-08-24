const { User } = require('./User.model');

const findAllUsersService = async () => {
  const users = await User.find();
  console.log(users);
  return users;
};

const createUserService = async userParam => {
  const newUser = await User.create(userParam);
  return newUser;
};

/////////////////////////////////////////////////////////////////
const findByEmailService = async email => {
  const user = await User.findOne({ email });
  return user;
};

const findByIdService = async id => {
  const user = await User.findById(id);
  return user;
};
/////////////////////////////////////////////////////////////////
module.exports = {
  findAllUsersService,
  createUserService,
  findByEmailService,
  findByIdService,
};
