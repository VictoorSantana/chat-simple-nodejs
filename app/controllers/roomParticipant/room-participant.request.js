const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_room: Joi.number().required().messages({
		'number.base': 'campo "id_room" deve ser do tipo "numero".',
		'number.empty': 'campo "id_room" não pode ser vazio.',
		'number.min': 'campo "id_room" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_room" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_room" é obrigatorio ser preenchido.'
	}),
	id_user: Joi.number().required().messages({
		'number.base': 'campo "id_user" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user" não pode ser vazio.',
		'number.min': 'campo "id_user" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user" é obrigatorio ser preenchido.'
	}),
	kind: Joi.number().messages({
		'number.base': 'campo "kind" deve ser do tipo "numero".',
		'number.empty': 'campo "kind" não pode ser vazio.',
		'number.min': 'campo "kind" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "kind" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "kind" é obrigatorio ser preenchido.'
	}),
});

