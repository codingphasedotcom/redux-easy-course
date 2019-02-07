import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
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
			<section id="modal">
				<div className="modal-container">
					<div className="close-modal">
						<i className="fas fa-times" />
					</div>
					<div className="modal-grid">
						<div className="images">
							<div
								className="cover"
								style={{
									backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/X-Men_v1_141.jpg/220px-X-Men_v1_141.jpg')`
								}}
							/>
						</div>
						<div className="info">
							<h2>Title</h2>
							<div className="info-line">
								<span className="bold">Author:</span>
								Chris Claremont
							</div>
							<div className="info-line">
								<span className="bold">Category:</span>
								Graphic Novel
							</div>
							<div className="info-line">
								<span className="bold">Published:</span>
								1981
							</div>
							<p className="review">
								"Days of Future Past" is a storyline in the Marvel Comics comic
								book The Uncanny X-Men issues #141–142, published in 1981. It
								deals with a dystopian future in which mutants are incarcerated
								in internment camps.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
