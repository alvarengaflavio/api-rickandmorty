import * as characterService from './character.service.js';

export const findAllCharactersController = async (req, res) => {
  try {
    const characters = await characterService.findAllCharactersService();
    if (characters === null) {
      return res.status(404).send({ message: 'No characters found' });
    }
    res.status(200).send({ characters });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createCharacterController = async (req, res) => {
  console.log('Criado! kkk');
};
