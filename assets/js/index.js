import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Modal from './components/Modal.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Modal />, document.getElementById('modalroot'));
