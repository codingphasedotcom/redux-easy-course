import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openingInfoBook } from '../actions/allActions.js';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	showAllBooks = () => {
		return this.props.booksData.map(book => {
			return (
				<div key={book.title} className="book-container">
					<div
						onClick={this.props.openingInfoBook.bind(null, book)}
						className="book"
						style={{ backgroundImage: `url('${book.coverURL}')` }}
					/>
				</div>
			);
		});
	};
	async test() {}
	render() {
		console.log(this.props);
		return <section className="all-books">{this.showAllBooks()}</section>;
	}
}
const mapStateToProps = state => {
	console.log(state);
	return state;
};
export default connect(
	mapStateToProps,
	{
		openingInfoBook
	}
)(AllBooks);
