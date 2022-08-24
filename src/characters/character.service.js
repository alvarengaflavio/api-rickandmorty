const { Character } = require('./Character.model');

const findAllCharactersService = async query => {
  const characters = await Character.find({}).populate('user');
  if (!characters.length > 0) return null;
  const { limit, offset } = query;
  const total = characters.length;
  const paginatedCharacters = characters.slice(offset, offset + limit);
  const findAllResult = await getPaginatedObject(
    paginatedCharacters,
    limit,
    offset,
    total,
  );
  return findAllResult;
};

const createCharacterService = async characterObject => {
  const createdCharacter = await Character.create(characterObject);
  return {
    message: 'Character created successfully',
    character: {
      id: createdCharacter._id,
      name: createdCharacter.name,
      imageUrl: createdCharacter.imageUrl,
    },
  };
};

const findByIdService = async id => {
  // na documentação oficial não tem populate('user')
  const foundCharacter = await Character.findById(id);
  return foundCharacter;
};

const updateCharacterService = async (id, characterObject) => {
  const updatedCharacter = await Character.findById(id);
  if (!updatedCharacter) return null;
  updatedCharacter.name = characterObject.name;
  updatedCharacter.imageUrl = characterObject.imageUrl;
  await updatedCharacter.save();
  return updatedCharacter;
};

const deleteCharacterService = async id => {
  const deletedCharacter = await Character.findByIdAndDelete(id);
  return deletedCharacter;
};

const searchCharacterService = async searchTerm => {
  const foundCharacters = await findByNameAndPopulate(searchTerm);
  if (!foundCharacters.length > 0)
    throw { name: 'NotFoundError', message: 'No characters found' };
  const characterList = {
    characters: await getCharacterObject(foundCharacters),
  };
  return characterList;
};

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////  INTERN FUNCTIONS  //////////////////////////////////////////////////////////////////
const previousUrl = async (limit, offset, total) => {
  const previousUrl = `/characters?limit=${limit}&offset=${offset - limit}`;
  if (offset - limit < 0) return null;
  return previousUrl;
};

const nextUrl = async (limit, offset, total) => {
  const nextUrl = `/characters?limit=${limit}&offset=${offset + limit}`;
  if (offset + limit > total) return null;
  return nextUrl;
};

const getPaginatedObject = async (characters, limit, offset, total) => {
  const paginatedCharacters = {
    nextUrl: await nextUrl(limit, offset, total),
    previousUrl: await previousUrl(limit, offset, total),
    limit: limit,
    offset: offset,
    total: total,
    results: await getCharacterObject(characters),
  };
  return paginatedCharacters;
};

const getCharacterObject = async characters => {
  const characterObject = characters.map(character => ({
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
  }));
  return characterObject;
};

const findByNameAndPopulate = async searchTerm => {
  const chracterList = Character.find({
    name: { $regex: `${searchTerm}`, $options: 'i' },
  })
    .sort({ name: 1 })
    .populate('user');
  return chracterList;
};
////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
  findAllCharactersService,
  createCharacterService,
  findByIdService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacterService,
};
