const products = require('../data/products');

exports.products_get_all = (req, res, next) => {
	res.json(products);
};

exports.products_get_product = (req, res) => {
	const id = req.params.productId;

	res.json(products.find((x) => Number(id) === x.id));
};
