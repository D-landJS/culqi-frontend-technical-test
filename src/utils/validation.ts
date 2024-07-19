export const validateInput = (input: string): string => {
	if (input.trim() === '') {
		return 'The search field cannot be empty.';
	}
	if (input.length < 4 || input.length > 20) {
		return 'The name must be between 4 and 20 characters long.';
	}
	return '';
};
