const express = require('express');

const router = express.Router();
const { setTrip, getTrip } = require('../controllers/travellerTripController');

router.post('/', setTrip);
router.get('/traveller/', getTrip);

module.exports = router;
