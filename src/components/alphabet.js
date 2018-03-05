import React, {Component, Fragment} from 'react';
import bulgare from './../datas/bulgarian/alphabet';
import Letters from './alphabet/letters';
import Draw from './alphabet/draw';

import BottomNav from './alphabet/bottomNav';
import Content from './alphabet/content';
import {Card, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';


class Alphabet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			letters : bulgare,
			counter : 0,
			total : bulgare.length
		};
		this.incrementCounter = this.incrementCounter.bind(this);
		this.backAndForth = this.backAndForth.bind(this);
	}

	incrementCounter() {
		let count = this.state.counter;
		if(count + 1 >= this.state.total) {
			count = -1;
		}
		this.setState ({
			counter : count + 1
		});
	}

	backAndForth(val) {
		let count = this.state.counter;
		if(count + val >= this.state.total) {
			this.setState({counter : 0});
		} else if (count + val <= 0) {
			this.setState({ counter : 0})
		} else {
			this.setState({ counter : count + val})
		}
	}

  render() {
  	console.log(this.state.letters);
  	return(
			<Fragment>
				<Card>
					<CardText
						style={{
							textAlign : "center",
							fontSize : "xx-large",
							paddingTop : 10,
							paddingBottom : 10
						}}>
						<Letters letter={this.state.letters[this.state.counter].letter}/>
					</CardText>
					<Divider />
						<Draw incrementCounter={this.incrementCounter} counter={this.state.counter} />
				</Card>
				<Content prononciation={this.state.letters[this.state.counter]}/>

				<BottomNav backAndForth={this.backAndForth} counter={this.state.counter} total={this.state.total}/>
			</Fragment>
			)
  }
}

export default Alphabet;
