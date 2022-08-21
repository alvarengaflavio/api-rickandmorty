export class CharacterEntity {
  constructor(character, userId) {
    this.id = character.id ?? undefined;
    this.name = character.name;
    this.image = character.image;
    this.userId = userId;
  }

  static validateJson(jsonChar) {
    if (!jsonChar) {
      throw new Error('Character JSON is undefined');
    }
    if (
      !jsonChar.name ||
      !jsonChar.name.length < 3 ||
      !jsonChar.name.length > 20
    ) {
      throw new Error('Invalid name');
    }
    if (!jsonChar.image) {
      throw new Error('Invalid imageURL');
    }
  }

  addUser(userId) {
    this.userId = userId;
  }

  getCharacter() {
    return {
      name: this.name,
      image: this.image,
      userId: this.userId,
    };
  }
}
