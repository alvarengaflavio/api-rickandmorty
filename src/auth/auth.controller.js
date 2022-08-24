const authService = require('../auth/auth.service');
const { ErrorHandler } = require('../.error/error.handler');
const bcrypt = require('bcrypt');

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authService.findByEmailLogin(email);
    if (!user) throw { name: 'NotFoundError', message: 'User not found' };

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw { name: 'AuthenticationError', message: 'Invalid password' };

    const token = authService.generateToken(user.id);
    res.status(200).send({ token });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

module.exports = { loginController };
