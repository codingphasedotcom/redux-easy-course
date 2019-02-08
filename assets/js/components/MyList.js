import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closingMyList, removingBook } from '../actions/allActions.js';

class MyList extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	showListOfBooks = () => {
		return this.props.globalState.myList.map(book => {
			return (
				<li key={book}>
					{book}{' '}
					<span
						className="delete-btn"
						onClick={this.props.removingBook.bind(null, book)}
					>
						Delete
					</span>
				</li>
			);
		});
	};
	render() {
		return (
			<section
				id="myList"
				className={this.props.globalState.listOpen == true ? 'active' : ''}
			>
				<h3>My List of Books</h3>
				<ul>{this.showListOfBooks()}</ul>
				<div className="close-list" onClick={this.props.closingMyList}>
					Close List
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(
	mapStateToProps,
	{
		closingMyList,
		removingBook
	}
)(MyList);
