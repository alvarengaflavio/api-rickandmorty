import { Character } from './Character.model.js';
import { CharacterEntity } from '../entities/Character.entity.js';

export const findAllCharactersService = async userId => {
  const characters = await Character.find({});
  if (!characters.length > 0) {
    return null;
  }
  return characters;
};

export const createCharacterService = async characterObject => {
  const newCharacter = new Character(characterObject);
  const createdCharacter = await Character.create(newCharacter.getCharacter());
  return createdCharacter;
};

export const findByIdService = async id => {
  const foundCharacter = await Character.findById(id);
  return foundCharacter;
};
