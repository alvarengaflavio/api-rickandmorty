import jwt from 'jsonwebtoken';

/////////////////////////////////////////////////////////////////////
// export const findByEmailAuth = async email => {
//   const user = await User.findOne({ email }).select('+password');
//   return user;
// };

export const generateToken = userId => {
  console.log(process.env.JWT_SECRET);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 84600,
  });
  return token;
};
