const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, console.log('Server is running on the port 5000'));

app.get('/', (req, res) => {
	// res.send('Hello there my dear friends');
	res.json({
		message: 'Obi wan kenobi',
	});
});

app.use('/products', productRoutes);

app.use('/users', userRoutes);
