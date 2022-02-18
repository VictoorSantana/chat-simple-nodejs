const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_user_from: Joi.number().required().messages({
		'number.base': 'campo "id_user_from" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user_from" não pode ser vazio.',
		'number.min': 'campo "id_user_from" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user_from" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user_from" é obrigatorio ser preenchido.'
	}),
	id_user_to: Joi.number().required().messages({
		'number.base': 'campo "id_user_to" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user_to" não pode ser vazio.',
		'number.min': 'campo "id_user_to" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user_to" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user_to" é obrigatorio ser preenchido.'
	}),
	status: Joi.number().default(1).messages({
		'number.base': 'campo "status" deve ser do tipo "numero".',
		'number.empty': 'campo "status" não pode ser vazio.',
		'number.min': 'campo "status" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "status" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "status" é obrigatorio ser preenchido.'
	}),
});

