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

export const updateCharacterService = async (id, characterObject) => {
  const updatedCharacter = await Character.findById(id);
  if (!updatedCharacter) {
    return null;
  }
  const updateEntity = new CharacterEntity(characterObject);
  updatedCharacter.name = updateEntity.name;
  updatedCharacter.imageUrl = updateEntity.imageUrl;
  await updatedCharacter.save();
  return updatedCharacter;
};

export const deleteCharacterService = async id => {
  const deletedCharacter = await Character.findByIdAndDelete(id);
  return deletedCharacter;
};
