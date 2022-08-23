export class AuthEntity {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  validate() {
    if (!this.email || !this.validateEmail()) {
      throw { name: 'ValidationError', message: 'Invalid email' };
    }
    if (
      !this.password ||
      this.password.length < 3 ||
      this.password.length > 30
    ) {
      throw { name: 'ValidationError', message: 'Invalid password' };
    }
  }

  validateEmail() {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      this.email,
    );
  }

  getAuth() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
