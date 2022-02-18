const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const friendRequest = require('./friend.request');
const friendService = require('../../services/friend/friend.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await friendService.find(req.query, req.user);
		res.status(200).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/:id', request(), async function (req, res) {
	try {
		const response = await friendService.findOne(req.params.id);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});
 
router.post('/', request(friendRequest), async function (req, res) {
	try {
		const response = await friendService.create(req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(friendRequest), async function (req, res) {
	try {
		const response = await friendService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await friendService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;