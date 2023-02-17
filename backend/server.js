const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();
const path = require('path');
const travellerRoutes = require('./routes/travellerTripRoutes');

const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middleware for parsing the body

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
	next();
});

app.get('/healthcheck', (req, res) => {
	res.status(200).json({
		status: 'healthy',
	});
});
app.use('/api/travel', travellerRoutes);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
