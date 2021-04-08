const products = require('../data/products');

exports.getAllProducts = (req, res, next) => {
	res.json(products);
};

exports.getProduct = (req, res) => {
	const id = req.params.productId;

	res.json(products.find((x) => Number(id) === x.id));
};

exports.createProduct = (req, res) => {
	const product = {
		id: products.length,
		name: req.body.name,
		description: req.body.description,
		director: req.body?.director,
		category: req.body?.category,
		price: req.body?.price,
		countInStock: req.body?.countInStock,
		rating: req.body?.rating,
	};
	console.log('ds');
	products.push(product);
	console.log('ds');

	res.json({
		message: 'Product was created',
	});
};
