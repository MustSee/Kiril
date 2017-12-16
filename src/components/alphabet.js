import React from 'react';

export default class Alphabet extends React.Component {
	render() {
		console.log(this.props.letter);
		return(
			<div className="alphabet">
				{this.props.letter.uppercase}
			</div>
		)
	}
}