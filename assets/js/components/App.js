import React, { Component } from 'react';
import AllBooks from './AllBooks.js';
import MyList from './MyList.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div id="approot">
				<div className="container">
					<div className="open-list">
						<i className="fas fa-bars" />
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}
