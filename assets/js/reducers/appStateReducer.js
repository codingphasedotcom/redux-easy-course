const initialState = {
	myList: [],
	openInfoBook: {},
	popupOpen: false,
	listOpen: false
};
let newState;

export const appStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			var myList = [...state.myList, action.payload];

			newState = Object.assign({}, state, { myList: myList });
			return newState;
			break;

		case 'REMOVE_BOOK':
			var myList = state.myList.filter(book => book !== action.payload);

			newState = Object.assign({}, state, { myList: myList });
			return newState;
			break;

		case 'OPEN_INFO_BOOK':
			newState = Object.assign({}, state, {
				openInfoBook: action.payload,
				popupOpen: true
			});
			console.log('==========NEW STATE');
			console.log(newState);
			return newState;
			break;

		case 'CLOSE_INFO_BOOK':
			newState = Object.assign({}, state, { popupOpen: false });
			return newState;
			break;

		case 'OPEN_MY_LIST':
			newState = Object.assign({}, state, { listOpen: true });
			console.log('==========NEW STATE');
			console.log(newState);
			return newState;
			break;

		case 'CLOSE_MY_LIST':
			newState = Object.assign({}, state, { listOpen: false });
			return newState;
			break;

		default:
			return state;
			break;
	}
};
