export class UserMiddleware {
  static validateUserBody(req, res, next) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).send({ message: 'Missing parameters' });
      }
      next();
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
}
