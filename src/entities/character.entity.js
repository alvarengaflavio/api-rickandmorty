export class CharacterEntity {
  constructor(character) {
    this.user = character.user;
    this.name = character.name;
    this.imageUrl = character.imageUrl;
  }

  static validateJson(jsonChar) {
    if (!jsonChar) {
      throw {
        name: 'ValidationError',
        message: 'Character must be a JSON object',
      };
    }
    if (
      !jsonChar.name ||
      jsonChar.name.length < 3 ||
      jsonChar.name.length > 30
    ) {
      throw { name: 'ValidationError', message: 'Invalid name' };
    }
    if (
      !jsonChar.imageUrl ||
      jsonChar.imageUrl.length < 3 ||
      jsonChar.imageUrl.length > 250
    ) {
      throw { name: 'ValidationError', message: 'Invalid imageimageUrl' };
    }
  }

  validade() {
    if (!this.name || this.name.length < 3 || this.name.length > 30) {
      throw { name: 'ValidationError', message: 'Invalid name' };
    }
    if (
      !this.imageUrl ||
      this.imageUrl.length < 3 ||
      this.imageUrl.length > 250
    ) {
      throw { name: 'ValidationError', message: 'Invalid imageUrl' };
    }
  }

  addUser(userId) {
    this.userId = userId;
  }

  getCharacter() {
    return {
      user: this.user,
      name: this.name,
      imageUrl: this.imageUrl,
    };
  }
}
