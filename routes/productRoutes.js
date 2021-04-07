const express = require('express');
const router = express.Router();
const products = require('../data/products');
const ProductsController = require('../controllers/productController');

// router.get('/', (req, res) => {
// 	res.json(JSON.stringify(products));
// });

router.get('/', ProductsController.products_get_all);

// router.get('/:productId', (req, res) => {
// 	const id = req.params.productId;

// 	res.json(products.find((x) => Number(id) === x.id));
// });

router.get('/:productId', ProductsController.products_get_product);

module.exports = router;
