const users = require('../data/users');

exports.getAllUsers = (req, res, next) => {
	res.json(users);
};

exports.getUser = (req, res) => {
	const id = req.params.productId;

	res.json(users.find((x) => Number(id) === x.id));
};
