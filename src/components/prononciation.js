import React from 'react';

export default class Prononciation extends React.Component {
	render() {
		return(
			<div className="bottom">
				{this.props.prononciation}
			</div>
		)
	}
}