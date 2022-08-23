import { Character } from './Character.model.js';
import { CharacterEntity } from '../entities/Character.entity.js';

export const findAllCharactersService = async userId => {
  const characters = await Character.find({}).populate('user');
  if (!characters.length > 0) return null;
  return characters;
};

export const createCharacterService = async characterObject => {
  const newCharacter = new CharacterEntity(characterObject);
  const createdCharacter = await Character.create(newCharacter.getCharacter());
  return createdCharacter;
};

export const findByIdService = async id => {
  const foundCharacter = await Character.findById(id);
  return foundCharacter;
};

export const updateCharacterService = async (id, characterObject) => {
  const updatedCharacter = await Character.findById(id);
  if (!updatedCharacter) return null;
  updatedCharacter.name = characterObject.name;
  updatedCharacter.imageUrl = characterObject.imageUrl;
  await updatedCharacter.save();
  return updatedCharacter;
};

export const deleteCharacterService = async id => {
  const deletedCharacter = await Character.findByIdAndDelete(id);
  return deletedCharacter;
};

export const searchCharacterService = async searchTerm => {
  const foundCharacters = await Character.find({
    name: { $regex: `${searchTerm}`, $options: 'i' },
  })
    .sort({ name: 1 })
    .populate('user');
  return foundCharacters;
};
