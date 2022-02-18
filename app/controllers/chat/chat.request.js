const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_user_owner: Joi.number().required().messages({
		'number.base': 'campo "id_user_owner" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user_owner" não pode ser vazio.',
		'number.min': 'campo "id_user_owner" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user_owner" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user_owner" é obrigatorio ser preenchido.'
	}),
	id_room: Joi.number().required().messages({
		'number.base': 'campo "id_room" deve ser do tipo "numero".',
		'number.empty': 'campo "id_room" não pode ser vazio.',
		'number.min': 'campo "id_room" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_room" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_room" é obrigatorio ser preenchido.'
	}),
	id_file: Joi.number().messages({
		'number.base': 'campo "id_file" deve ser do tipo "numero".',
		'number.empty': 'campo "id_file" não pode ser vazio.',
		'number.min': 'campo "id_file" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_file" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_file" é obrigatorio ser preenchido.'
	}),
	message: Joi.string().max(200).required().messages({
		'string.base': 'campo "message" deve ser do tipo "texto".',
		'string.empty': 'campo "message" não pode ser vazio.',
		'string.min': 'campo "message" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "message" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "message" é obrigatorio ser preenchido.'
	}),
	kind: Joi.number().messages({
		'number.base': 'campo "kind" deve ser do tipo "numero".',
		'number.empty': 'campo "kind" não pode ser vazio.',
		'number.min': 'campo "kind" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "kind" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "kind" é obrigatorio ser preenchido.'
	}),
	status: Joi.number().messages({
		'number.base': 'campo "status" deve ser do tipo "numero".',
		'number.empty': 'campo "status" não pode ser vazio.',
		'number.min': 'campo "status" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "status" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "status" é obrigatorio ser preenchido.'
	}),
});

