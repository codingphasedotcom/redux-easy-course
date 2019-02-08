import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer.js';
import { booksDataReducer } from './booksDataReducer';

export default combineReducers({
	globalState: appStateReducer,
	booksData: booksDataReducer
});
