import { Character } from './Character.model.js';

export const findAllCharactersService = async userId => {
  const characters = await Character.find({ user: userId }).populate('user');
  if (!characters.length > 0) {
    return null;
  }
  return characters;
};
