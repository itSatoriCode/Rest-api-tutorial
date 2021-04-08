const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productController');

// router.get('/', (req, res) => {
// 	res.json(JSON.stringify(products));
// });

router.get('/', ProductsController.getAllProducts);

// router.get('/:productId', (req, res) => {
// 	const id = req.params.productId;

// 	res.json(products.find((x) => Number(id) === x.id));
// });

router.get('/:productId', ProductsController.getProduct);

router.post('/', ProductsController.createProduct);

module.exports = router;
