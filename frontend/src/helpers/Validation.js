export function validateNonNegativeNumber(value) {
	const numericValue = Number(value);
	return value !== '' && numericValue >= 0;
}

export function nameValidator(name) {
	if (!name) return true;
	return '';
}

export function emailValidator(email) {
	const re = /\S+@\S+\.\S+/;
	if (!email) return "Email can't be empty.";
	if (!re.test(email)) return true;
	return '';
}

export function checkEmpltyField(value) {
	if (!value) return 'Please Enter all the values';
	return true;
}
export default {
	nameValidator,
	emailValidator,
	checkEmpltyField,
	validateNonNegativeNumber,
};
