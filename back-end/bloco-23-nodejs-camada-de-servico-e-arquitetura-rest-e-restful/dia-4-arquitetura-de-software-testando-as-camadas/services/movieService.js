const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const getAll = async () => {
  const moviesData = await MoviesModel
  .getAll();

  return moviesData.map(getNewMovie);
};

const findById = async (id) => {
  const movieData = await MoviesModel.findById(id);

  if (!movieData) return null;

  return getNewMovie(movieData);
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getById = async (id) => {
  const movieData = await MoviesModel.getById(id);

  if (!movieData) return null;

  return movieData;
};

module.exports = {
  getAll,
  create,
  findById,
  getById,
};