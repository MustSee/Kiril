import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 15,
		marginBottom: 5,
		fontWeight: 400,
		textAlign : 'center'
	},
	slide: {
		padding: 10,
		textAlign: 'center'
	}
};

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,

		};
	}

	handleChange = (value) => {
		this.setState({
			slideIndex: value,
		});
	};

	render() {
		return(
			<div>
				<Tabs
					onChange={this.handleChange}
					value={this.state.slideIndex}
				>
					<Tab label="Prononciation" value={0} />
					<Tab label="Mot" value={1} />
				</Tabs>
				<SwipeableViews
					index={this.state.slideIndex}
					onChangeIndex={this.handleChange}
				>
					<div className="content">
						<div style={styles.headline}>[ {this.props.prononciation.prononciation.son} ]</div>
						<div style={styles.slide}>
							{this.props.prononciation.prononciation.explanation}
						</div>
					</div>
					<div className="content">
						<div style={styles.headline}>
							{this.props.prononciation.words[0]} - {this.props.prononciation.words[1]}
						</div>
					</div>
					</SwipeableViews>
			</div>
		);
	}
}