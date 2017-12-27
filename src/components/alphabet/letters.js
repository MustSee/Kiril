import React from 'react';

export default class Letters extends React.Component {
	render() {
		return(
					<div>
						<span>{this.props.letter.uppercase}</span>
						&nbsp;&nbsp;
						<span>{this.props.letter.lowercase}</span>
					</div>
		)
	}
}