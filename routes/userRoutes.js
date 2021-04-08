const express = require('express');
const users = require('../data/users');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.get('/:userId', UserController.getUser);

module.exports = router;
