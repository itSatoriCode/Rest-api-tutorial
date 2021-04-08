const products = require('../data/products');

exports.getAllProducts = (req, res, next) => {
	res.json(products);
};

exports.getProduct = (req, res) => {
	const id = req.params.productId;

	res.json(products.find((x) => Number(id) === x.id));
};

exports;
