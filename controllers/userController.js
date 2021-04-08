const users = require('../data/users');

exports.users_get_all = (req, res, next) => {
	res.json(users);
};

exports.users_get_user = (req, res) => {
	const id = req.params.productId;

	res.json(users.find((x) => Number(id) === x.id));
};
