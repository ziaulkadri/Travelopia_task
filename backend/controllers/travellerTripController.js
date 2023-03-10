const asyncHandler = require('express-async-handler');
const Traveller = require('../model/travellerModel');
// @desc  Get trip
// @route Get/api/trip
// @access public
const getTrip = asyncHandler(async (req, res) => {
	const trip = await Traveller.find();
	res.status(200).json(trip);
});

// @desc  set trip
// @route post/api/trip
// @access public
const setTrip = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(404);
		throw new Error('Please add details');
	}

	await Traveller.create({
		name: req.body.name,
		email: req.body.email,
		destination: req.body.destination,
		no_of_travelers: Number(req.body.numTravelers),
		budget_per_person: Number(req.body.budget),
	});
	res.status(200).json({ message: 'Successfully created' });
});

module.exports = {
	getTrip,
	setTrip,
};
