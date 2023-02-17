import axios from 'axios';

const setTrip = (payload) => {
	return axios
		.post(
			`${process.env.REACT_APP_API}/api/travel/`,
			payload,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
			{ timeout: process.env.REACT_APP_API_TIMEOUT }
		)
		.then(
			(response) => {
				return response.data;
			},
			(error) => {
				throw error.response;
			}
		);
};
const getTrip = () => {
	return axios
		.get(
			`${process.env.REACT_APP_API}/api/travel/traveller/`,

			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
			{ timeout: process.env.REACT_APP_API_TIMEOUT }
		)
		.then(
			(response) => {
				return response.data;
			},
			(error) => {
				throw error.response;
			}
		);
};
const TravellerService = {
	setTrip,
	getTrip,
};

export default TravellerService;
