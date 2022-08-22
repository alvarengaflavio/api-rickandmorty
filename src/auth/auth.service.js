import jwt from 'jsonwebtoken';

/////////////////////////////////////////////////////////////////////
// SERVICE: AuthService
export const generateToken = userId => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 84600,
  });
  return token;
};
