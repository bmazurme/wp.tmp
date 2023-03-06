import { celebrate, Joi } from 'celebrate';
import validator from 'validator';
import { isValidObjectId } from 'mongoose';
import BadRequestError from '../errors/BadRequestError';

const checkUrl = (value: string, helpers: any) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.message('поле заполнено некорректно');
};

const StringRequired = Joi.string().required();

const validateObjectId = celebrate({
  params: Joi.object().keys({
    id: StringRequired.custom((value) => {
      if (!isValidObjectId(value)) {
        throw new BadRequestError('переданы некорректные данные');
      }

      return value;
    }),
  }),
});

const validateMovieData = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().min(2).required(),
    nameEN: Joi.string().min(2).required(),
    country: Joi.string().min(2).required(),
    director: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    duration: Joi.number().required(),
    year: Joi.string().min(2).max(4).required(),
    image: Joi.string().required().custom(checkUrl),
    trailerLink: Joi.string().required().custom(checkUrl),
    thumbnail: Joi.string().required().custom(checkUrl),
    movieId: Joi.number().required(),
  }),
});

const validateUserData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const validateLoginData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateRegistrData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(checkUrl),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export {
  validateObjectId,
  validateUserData,
  validateMovieData,
  validateLoginData,
  validateRegistrData,
};
