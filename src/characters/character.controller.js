import * as characterService from './character.service.js';
import { ErrorHandler } from '../.error/error.handler.js';

export const findAllCharactersController = async (req, res, next) => {
  try {
    const characters = await characterService.findAllCharactersService();
    if (characters === null) {
      throw { name: 'NotFoundError', message: 'No characters found' };
    }
    res.status(200).send({ characters });
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
    res.status(201).send({ createdCharacter });
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
    res.status(200).send( foundCharacter );
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
    if (characters === null)
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
