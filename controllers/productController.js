// const products = require('../data/products');
const Product = require('../models/productModel');

exports.getAllProducts = (req, res, next) => {
	// res.json(products);
	Product.find()
		.then((items) => res.json(items))
		.catch((err) => res.status(404).json({ message: 'No movies found' }));
};

exports.getProduct = (req, res) => {
	const id = req.params.productId;

	// res.json(products.find((x) => Number(id) === x.id));

	Product.findById(id)
		.then((item) => res.json(item))
		.catch((err) => res.status(404).json({ message: 'No movie found' }));
};

exports.createProduct = (req, res) => {
	// const product = {
	// 	id: products.length,
	// 	name: req.body.name,
	// 	description: req.body.description,
	// 	director: req.body?.director,
	// 	category: req.body?.category,
	// 	price: req.body?.price,
	// 	countInStock: req.body?.countInStock,
	// 	rating: req.body?.rating,
	// };

	console.log(req.body);
	Product.create(req.body)
		.then((Movie) => res.json({ message: 'Movie added successfully' }))
		.catch((err) => res.status(400).json({ error: err }));

	// res.json({
	// 	message: 'Product was created',
	// });
};
