import React from 'react';

export default class Counter extends React.Component {
	render() {
		return(
			<div className='counter'>
					{this.props.counter + 1} / {this.props.total}
			</div>
		)
	}
}