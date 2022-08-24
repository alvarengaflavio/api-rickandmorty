import * as characterService from './character.service.js';
import { ErrorHandler } from '../.error/error.handler.js';

export const findAllCharactersController = async (req, res, next) => {
  try {
    const characters = await characterService.findAllCharactersService();
    if (characters === null) {
      throw { name: 'NotFoundError', message: 'No characters found' };
    }
    let { limit, offset } = req.query;
    const total = characters.length;
    const paginatedCharacters = characters.slice(offset, offset + limit);
    const result = await characterService.getPaginatedObject(
      paginatedCharacters,
      limit,
      offset,
      total,
    );
    res.status(200).send(result);
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const createCharacterController = async (req, res, next) => {
  try {
    const newCharacter = { ...req.body };
    const createdCharacter = await characterService.createCharacterService(
      newCharacter,
    );
    res.status(201).send({
      message: 'Character created successfully',
      character: {
        id: createdCharacter._id,
        name: createdCharacter.name,
        imageUrl: createdCharacter.imageUrl,
      },
    });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const findByIdController = async (req, res, next) => {
  try {
    const foundCharacter = await characterService.findByIdService(
      req.params.id,
    );
    if (!foundCharacter)
      throw { name: 'NotFoundError', message: 'Character not found' };
    res.status(200).send(foundCharacter);
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const updateCharacterController = async (req, res, next) => {
  try {
    const modifiedCharacter = { ...req.body };
    const updatedCharacter = await characterService.updateCharacterService(
      req.params.id,
      modifiedCharacter,
    );
    if (updatedCharacter === null)
      throw { name: 'NotFoundError', message: 'Character Id not found' };

    res.status(200).send({ updatedCharacter });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const deleteCharacterController = async (req, res, next) => {
  try {
    const deletedCharacter = await characterService.deleteCharacterService(
      req.params.id,
    );
    if (!deletedCharacter)
      throw { name: 'NotFoundError', message: 'Character not found' };
    res.status(200).send({ deletedCharacter });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};

export const searchCharacterController = async (req, res, next) => {
  try {
    const foundCharacters = await characterService.searchCharacterService(
      req.query.name,
    );
    if (!foundCharacters.length > 0)
      throw { name: 'NotFoundError', message: 'No characters found' };
    res.status(200).send({ foundCharacters });
  } catch (err) {
    ErrorHandler.handleError(err, req, res, next);
  }
};
