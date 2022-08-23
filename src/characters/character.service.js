import { Character } from './Character.model.js';

export const findAllCharactersService = async userId => {
  const characters = await Character.find({}).populate('user');
  if (!characters.length > 0) return null;
  return characters;
};

export const createCharacterService = async characterObject => {
  const createdCharacter = await Character.create(characterObject);
  return createdCharacter;
};

export const findByIdService = async id => {
  // na documentação oficial não tem populate('user')
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

export const previousUrl = async (limit, offset, total) => {
  const previousUrl = `/characters?limit=${limit}&offset=${offset - limit}`;
  if (offset - limit < 0) return null;
  return previousUrl;
};

export const nextUrl = async (limit, offset, total) => {
  const nextUrl = `/characters?limit=${limit}&offset=${offset + limit}`;
  if (offset + limit > total) return null;
  return nextUrl;
}

export const getPaginatedObject = async (characters, limit, offset, total) => {
  const paginatedCharacters = {
    nextUrl: await nextUrl(limit, offset, total),
    previousUrl: await previousUrl(limit, offset, total),
    limit: limit,
    offset: offset,
    total: total,
    results: characters.map(character => ({
      id: character._id,
      user: {
        _id: character.user._id,
        name: character.user.name,
        username: character.user.username,
        email: character.user.email,
        photo: character.user.photo,
        __v: character.user.__v,
      },
      name: character.name,
      imageUrl: character.imageUrl,
    })),
  }
  return paginatedCharacters;
}