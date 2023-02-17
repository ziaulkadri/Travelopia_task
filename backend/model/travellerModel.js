const mongoose = require('mongoose');

const travellerSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		destination: { type: String, required: true },
		no_of_travelers: { type: Number, required: true },
		budget_per_person: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Traveller', travellerSchema);
