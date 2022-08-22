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
  try {
    const newCharacter = { ...req.body, user: req.userId };
    const createdCharacter = await characterService.createCharacterService(
      newCharacter,
    );
    res.status(201).send({ createdCharacter });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findByIdController = async (req, res) => {
  try {
    const foundCharacter = await characterService.findByIdService(
      req.params.id,
    );
    if (!foundCharacter) {
      return res.status(404).send({ message: 'Character not found' });
    }
    res.status(200).send({ foundCharacter });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateCharacterController = async (req, res) => {
  try {
    const modifiedCharacter = { ...req.body, user: req.userId };
    const updatedCharacter = await characterService.updateCharacterService(
      req.params.id,
      modifiedCharacter,
    );
    if (!updatedCharacter) {
      return res.status(404).send({ message: 'Character Id not found' });
    }
    res.status(200).send({ updatedCharacter });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteCharacterController = async (req, res) => {
  try {
    const deletedCharacter = await characterService.deleteCharacterService(
      req.params.id,
    );
    if (!deletedCharacter) {
      return res.status(404).send({ message: 'Character not found' });
    }
    res.status(200).send({ deletedCharacter });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
