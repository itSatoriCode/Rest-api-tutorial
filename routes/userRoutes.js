const express = require('express');
const users = require('../data/users');

const router = express.Router();

router.get('/', (req, res) => {
	console.log(users);
	res.json(users);
});

router.get('/:userId', (req, res) => {
	const id = req.params.userId;

	res.json(users.find((x) => Number(id) === x.id));
});

module.exports = router;
