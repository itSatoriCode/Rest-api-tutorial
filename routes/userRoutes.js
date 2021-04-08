const express = require('express');
const users = require('../data/users');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.users_get_all);

router.get('/:userId', UserController.users_get_user);

module.exports = router;
