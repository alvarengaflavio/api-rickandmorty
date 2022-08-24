const jwt = require('jsonwebtoken');
const { User } = require('../users/User.model');

const findByEmailLogin = async email => {
  const user = await User.findOne({ email }).select('+password');
  return user;
};

/////////////////////////////////////////////////////////////////////
// SERVICE: AuthService
const generateToken = userId => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 84600,
  });
  return token;
};

module.exports = { generateToken, findByEmailLogin };
