const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_user_owner: Joi.number().required().messages({
		'number.base': 'campo "id_user_owner" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user_owner" não pode ser vazio.',
		'number.min': 'campo "id_user_owner" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user_owner" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user_owner" é obrigatorio ser preenchido.'
	}),
	id_user_friend: Joi.number().required().messages({
		'number.base': 'campo "id_user_friend" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user_friend" não pode ser vazio.',
		'number.min': 'campo "id_user_friend" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user_friend" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user_friend" é obrigatorio ser preenchido.'
	}),
});

