const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const requestFriendRequest = require('./request-friend.request');
const requestFriendService = require('../../services/requestFriend/request-friend.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await requestFriendService.find(req.query, req.user);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/count/to-me', request(), async function (req, res) {
	try {
		const response = await requestFriendService.requestsToMe(req.user);
		res.status(200).json(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.post('/reject-or-accept', request(), async function (req, res) {
	try {
		const response = await requestFriendService.rejectOrAcceptNewFriend(req.query, req.user);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.post('/', request(), async function (req, res) {
	try {
		const response = await requestFriendService.create(req.value, req.query, req.user);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(requestFriendRequest), async function (req, res) {
	try {
		const response = await requestFriendService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await requestFriendService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;