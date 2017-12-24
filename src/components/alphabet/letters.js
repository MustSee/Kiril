import React from 'react';

export default class Letters extends React.Component {
	render() {
		console.log(this.props.letter);
		return(
			<div className="wrapperAlphabet">
				<div className="alphabet">
					<span className="uppercase">{this.props.letter.uppercase}</span>
					&nbsp;&nbsp;
					<span className="lowercase">{this.props.letter.lowercase}</span>
				</div>
			</div>
		)
	}
}