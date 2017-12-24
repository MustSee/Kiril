import React from 'react';
import screenfull from 'screenfull';

export default class FullScreen extends React.Component {
	constructor(props) {
		super(props);
		this.handleFullScreen = this.handleFullScreen.bind(this);
	}

	handleFullScreen() {
		console.log('handleFullScreen');
		console.log(screenfull);
		if(screenfull.enabled) {
			screenfull.toggle();
		}
	}

	render() {
		return (
			<div className='fullScreen'
					 onClick={this.handleFullScreen}
			>

			</div>
		)
	}
}