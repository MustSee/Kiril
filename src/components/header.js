import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FullScreen from 'material-ui/svg-icons/navigation/fullscreen';
import Menu from 'material-ui/svg-icons/navigation/menu'
import AppBar from 'material-ui/AppBar';
import screenfull from 'screenfull';
import { Link } from 'react-router-dom';


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.handleFullScreen = this.handleFullScreen.bind(this);
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	handleFullScreen() {
		console.log('handleFullScreen');
		console.log(screenfull);
		if (screenfull.enabled) {
			screenfull.toggle();
		}
	}

	render() {
		return (
			<React.Fragment>
				<AppBar
					title="Kiril"
					iconElementLeft={
						<IconButton
							onClick={this.handleToggle}
						>
							<Menu/>
						</IconButton>
					}
					iconElementRight={
						<IconButton
							onClick={this.handleFullScreen}
						>
							<FullScreen/>
						</IconButton>
					}
				/>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<Link to='/'>
						<MenuItem onClick={this.handleClose}>Home</MenuItem>
					</Link>
					<Link to='/alphabet'>
						<MenuItem onClick={this.handleClose}>Alphabet</MenuItem>
					</Link>
					<Link to='/games'>
						<MenuItem onClick={this.handleClose}>Games</MenuItem>
					</Link>
					<Link to='/games'>
					<MenuItem onClick={this.handleClose}>Culture</MenuItem>
					</Link>
				</Drawer>
			</React.Fragment>
		);
	}
}