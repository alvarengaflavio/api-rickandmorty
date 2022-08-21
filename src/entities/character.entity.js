export class CharacterEntity {
  constructor(character) {
    this.user = character.user;
    this.name = character.name;
    this.imageUrl = character.imageUrl;
  }

  static validateJson(jsonChar) {
    if (!jsonChar) {
      throw new Error('Character JSON is undefined');
    }
    if (
      !jsonChar.name ||
      jsonChar.name.length < 3 ||
      jsonChar.name.length > 25
    ) {
      throw new Error('Invalid name');
    }
    if (
      !jsonChar.imageUrl ||
      jsonChar.imageUrl.length < 3 ||
      jsonChar.imageUrl.length > 80
    ) {
      throw new Error('Invalid imageUrl');
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
