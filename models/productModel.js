const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	director: {
		type: String,
		required: true,
	},
	category: {
		type: String,
	},
	price: {
		type: Number,
	},
	countInStock: {
		type: Number,
	},
	rating: {
		type: Number,
	},
});

module.exports = mongoose.model('Product', ProductSchema);
