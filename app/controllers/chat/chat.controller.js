const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const chatRequest = require('./chat.request');
const chatService = require('../../services/chat/chat.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await chatService.find(req.query);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/:id', request(), async function (req, res) {
	try {
		const response = await chatService.findOne(req.params.id);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});
 
router.post('/', request(chatRequest), async function (req, res) {
	try {
		const response = await chatService.create(req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(chatRequest), async function (req, res) {
	try {
		const response = await chatService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await chatService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;