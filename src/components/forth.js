import React from 'react';

export default class Forth extends React.Component {
		constructor(props) {
			super(props);
			this.handleOnClick = this.handleOnClick.bind(this);
		}

		handleOnClick() {
			this.props.backAndForth(1);
		}

	render() {
		return(
			<div className="forth" onClick={this.handleOnClick}>
				=>
			</div>
		)
	}
}