import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AllBooks extends Component {
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
			<section className="all-books">
				<div className="book-container">
					<div
						className="book"
						style={{
							backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/X-Men_v1_141.jpg/220px-X-Men_v1_141.jpg')`
						}}
					/>
				</div>
			</section>
		);
	}
}
