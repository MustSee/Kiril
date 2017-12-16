import React from 'react';

export default class Alphabet extends React.Component {
	render() {
		return(
			<div className="alphabet">
				{this.props.letter}
			</div>
		)
	}
}