import React, { Component } from 'react';
import BackToHomepage from './header/backToHomepage';
import FullScreen from './header/fullscreen';
import Sound from './header/sound';

export default class Header extends Component {
	render() {
		return(
			<div className="menu">
				<BackToHomepage />
				<Sound />
				<FullScreen />
			</div>
		);
	}
}