import React from 'react';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Before from 'material-ui/svg-icons/image/navigate-before';
import Next from 'material-ui/svg-icons/image/navigate-next';
import Chip from 'material-ui/Chip';


const before = <Before />
const next = <Next />;

const styles = {
	chip: {
		margin: 4,
	},
	wrapper: {
		display: 'flex',
		justifyContent : 'center',
		alignItems : 'center'
	}
};

export default class BottomNav extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnBefore = this.handleOnBefore.bind(this);
		this.handleOnNext = this.handleOnNext.bind(this);
	}

	handleOnBefore() {
		this.props.backAndForth(-1);
	}

	handleOnNext() {
		this.props.backAndForth(1);
	}

	render(){
		return(
			<Paper zDepth={1}>
			<BottomNavigation style={{'height' : 48}}>
					<BottomNavigationItem
						icon={before}
						onClick={this.handleOnBefore}
					/>

				<div style={styles.wrapper}>
					<Chip
						style={styles.chip}
					>
						{this.props.counter + 1} / {this.props.total}
					</Chip>
				</div>

					<BottomNavigationItem
						icon={next}
						onClick={this.handleOnNext}
					/>
				</BottomNavigation>
			</Paper>
		);
	}
}