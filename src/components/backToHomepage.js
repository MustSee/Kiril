import React from 'react';

export default class BackToHomepage extends React.Component {
	constructor(props) {
		super(props);
		this.handleHomepage = this.handleHomepage.bind(this);
	}

	handleHomepage() {
		console.log('handleHomePage / change route')
	}

	render() {
		return(
			<div className="backToHomepage"
					 onClick={this.handleHomepage}>
			</div>
		)
	}
}