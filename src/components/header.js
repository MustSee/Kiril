import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
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
		if (screenfull.enabled) {
			screenfull.toggle();
		}
	}

	render() {
      return <React.Fragment>
        <AppBar
          title="Kiril"
          iconElementLeft={
            <IconButton
              onClick={this.handleToggle}
            >
              <Menu />
            </IconButton>
          }
          iconElementRight={
            <IconButton
              onClick={this.handleFullScreen}
            >
              <FullScreen />
            </IconButton>
          }
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <div className="titleDrawer"> KIRIL</div>
          <Divider />
          <Link to='/'>
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to='/alphabet'>
            <MenuItem onClick={this.handleClose}>Alphabet</MenuItem>
          </Link>
          <Link to='/words'>
            <MenuItem onClick={this.handleClose}>Words</MenuItem>
          </Link>
          <Link to='/contact'>
            <MenuItem onClick={this.handleClose}>Contact</MenuItem>
          </Link>
        </Drawer>
      </React.Fragment>;
	}
}