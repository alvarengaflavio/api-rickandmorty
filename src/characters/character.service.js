import { Character } from './Character.model.js';

export const findAllCharactersService = async userId => {
  const characters = await Character.find({});
  if (!characters.length > 0) {
    return null;
  }
  return characters;
};

export const createCharacterService = async newCharacter => {
  console.log(newCharacter.getCharacter());
  const createdCharacter = await Character.create(newCharacter.getCharacter());
  return createdCharacter;
};
