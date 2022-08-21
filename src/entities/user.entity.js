export class UserEntity {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
  }

  validade() {
    if (!this.name || !this.email || !this.password || !this.image) {
      throw new Error("Invalid user");
    }
    if (!this.name.length > 2 || !this.name.length < 25) {
      throw new Error("Invalid name");
    }
    if (!this.validadeEmail()) {
      throw new Error("Invalid email");
    }
    if (!this.password.length > 3 || !this.password.length < 30) {
      throw new Error("Invalid password");
    }
    if (!this.image.length > 3 || !this.image.length < 80) {
      throw new Error("Invalid imageURL");
    }
  }

  validateEmail() {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      this.email
    );
  }
}
