import React from 'react';
import screenfull from 'screenfull';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleFullScreen = this.handleFullScreen.bind(this);
	}

	handleFullScreen() {
		console.log('handleFullScreen');
		console.log(screenfull);
		if(screenfull.enabled) {
			screenfull.request();
		}
	}

	render() {
		return(
			<div className='counter' onClick={this.handleFullScreen}>
					{this.props.counter + 1} / {this.props.total}
			</div>
		)
	}
}