import React from 'react';

export default class Back extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.props.backAndForth(-1);
	}

	render() {
		return(
			<div className="back" onClick={this.handleOnClick}>
				{'<'}=
			</div>
		)
	}
}