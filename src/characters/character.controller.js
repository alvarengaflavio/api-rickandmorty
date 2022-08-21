import * as characterService from './character.service.js';
import { CharacterEntity } from '../entities/Character.entity.js';

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
    CharacterEntity.validateJson(req.body);
    console.log(req.body);
    const newCharacter = new CharacterEntity(req.body);
    const createdCharacter = await characterService.createCharacterService(
      newCharacter,
    );
    res.status(201).send({ createdCharacter });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
