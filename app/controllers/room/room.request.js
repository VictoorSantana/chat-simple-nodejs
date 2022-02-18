const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_user: Joi.number().required().messages({
		'number.base': 'campo "id_user" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user" não pode ser vazio.',
		'number.min': 'campo "id_user" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user" é obrigatorio ser preenchido.'
	}),
	id_file: Joi.number().messages({
		'number.base': 'campo "id_file" deve ser do tipo "numero".',
		'number.empty': 'campo "id_file" não pode ser vazio.',
		'number.min': 'campo "id_file" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_file" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_file" é obrigatorio ser preenchido.'
	}),
	name: Joi.string().max(45).required().default('Não disponível').messages({
		'string.base': 'campo "name" deve ser do tipo "texto".',
		'string.empty': 'campo "name" não pode ser vazio.',
		'string.min': 'campo "name" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "name" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "name" é obrigatorio ser preenchido.'
	}),
	kind: Joi.number().messages({
		'number.base': 'campo "kind" deve ser do tipo "numero".',
		'number.empty': 'campo "kind" não pode ser vazio.',
		'number.min': 'campo "kind" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "kind" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "kind" é obrigatorio ser preenchido.'
	}),
});

