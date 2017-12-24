import React from 'react';

export default class Prononciation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu : 'prononciation'
		}
		this.handlePrononciation = this.handlePrononciation.bind(this);
		this.handleWords = this.handleWords.bind(this);
	}

	handlePrononciation() {
		this.setState({menu : 'prononciation'});
	}

	handleWords() {
		console.log('handlewords')
		this.setState({menu : 'words'});
	}

	render() {
		return(
			<React.Fragment>
				<div className='titre'>
					<span className='prononciation' onClick={this.handlePrononciation}>PRONONCIATION</span>
					<span className='mots' onClick={this.handleWords}>MOTS</span>
				</div>
				{
					this.state.menu === 'prononciation' ?
						<div className='son'>
							[ {this.props.prononciation.prononciation.son} ] <br/>
							<span className='explanation'>
								{this.props.prononciation.prononciation.explanation}
							</span>
						</div>
						:
						<div className='son'>
							{this.props.prononciation.words[0]} - {this.props.prononciation.words[1]}
						</div>
				}

			</React.Fragment>
		)
	}
}