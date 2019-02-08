export const addingBook = bookTitle => {
	return {
		type: 'ADD_BOOK',
		payload: bookTitle
	};
};

export const removingBook = book => {
	return {
		type: 'REMOVE_BOOK',
		payload: book
	};
};

export const openingInfoBook = book => {
	return {
		type: 'OPEN_INFO_BOOK',
		payload: book
	};
};

export const closingInfoBook = book => {
	return {
		type: 'CLOSE_INFO_BOOK',
		payload: book
	};
};

export const openingMyList = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};

export const closingMyList = () => {
	return {
		type: 'CLOSE_MY_LIST'
	};
};
