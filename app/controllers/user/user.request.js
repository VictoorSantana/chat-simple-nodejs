



const Joi = require('@hapi/joi');
const authRequest = require('../auth/auth.request');
module.exports = Joi.object({
    name: Joi.string().max(110).required().messages({
        'string.base': 'campo "name" deve ser do tipo "texto".',
        'string.empty': 'campo "name" não pode ser vazio.',
        'string.min': 'campo "name" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "name" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "name" é obrigatorio ser preenchido.'
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'campo "email" deve ser do tipo "texto".',
        'string.empty': 'campo "email" não pode ser vazio.',
        'string.min': 'campo "email" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "email" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "email" é obrigatorio ser preenchido.'
    }),
    birthday: Joi.date().required().messages({
        'date.base': 'campo "birthday" deve ser do tipo "data".',
        'date.empty': 'campo "birthday" não pode ser vazio.',
        'date.min': 'campo "birthday" deve ter o tamanho minimo de {#limit}',
        'date.max': 'campo "birthday" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "birthday" é obrigatorio ser preenchido.'
    }),
    username: Joi.string().max(110).required().messages({
        'string.base': 'campo "username" deve ser do tipo "texto".',
        'string.empty': 'campo "username" não pode ser vazio.',
        'string.min': 'campo "username" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "username" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "username" é obrigatorio ser preenchido.'
    }),
    password: Joi.string().max(110).required().messages({
        'string.base': 'campo "password" deve ser do tipo "texto".',
        'string.empty': 'campo "password" não pode ser vazio.',
        'string.min': 'campo "password" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "password" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "password" é obrigatorio ser preenchido.'
    }),
    id_folder_parent: Joi.number().required().messages({
		'number.base': 'campo "id_folder_parent" deve ser do tipo "numero".',
		'number.empty': 'campo "id_folder_parent" não pode ser vazio.',
		'number.min': 'campo "id_folder_parent" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_folder_parent" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_folder_parent" é obrigatorio ser preenchido.'
	}),
});

