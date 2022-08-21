export class UserEntity {
  constructor(user) {
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo;
  }

  validate() {
    if (!this.name || this.name.length < 3 || this.name.length > 25) {
      throw new Error('Invalid name');
    }
    if (
      !this.username ||
      this.username.length < 3 ||
      this.username.length > 25
    ) {
      throw new Error('Invalid username');
    }
    if (!this.email || !this.validateEmail()) {
      throw new Error('Invalid email');
    }
    if (
      !this.password ||
      this.password.length < 3 ||
      this.password.length > 30
    ) {
      throw new Error('Invalid password');
    }
    if (!this.photo || this.photo.length < 4 || this.photo.length > 80) {
      console.log(this.photo);
      throw new Error('Invalid photoURL');
    }
  }

  validateEmail() {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      this.email,
    );
  }

  getUser() {
    return {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      photo: this.photo,
    };
  }
}
