import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import Modal from './components/Modal.js';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
ReactDOM.render(
	<Provider store={store}>
		<Modal />
	</Provider>,
	document.getElementById('modalroot')
);
