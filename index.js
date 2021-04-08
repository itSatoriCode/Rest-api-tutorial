const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.json({
		message: 'Welcome to itSatori API',
	});
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status(404);
	next();
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: 'Not found',
		},
	});
});

const port = process.env.PORT || 5000;
app.listen(port, console.log('Server is running on the port 5000'));
