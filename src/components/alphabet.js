import React, {Component, Fragment} from 'react';
import bulgare from './../datas/bulgarian/alphabet';
import Letters from './alphabet/letters';
import Back from './alphabet/back';
import Counter from './alphabet/counter';
import Draw from './alphabet/draw';
import Forth from './alphabet/forth';
import Prononciation from './alphabet/prononciation';

class Alphabet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			letters : bulgare,
			counter : 0,
			total : bulgare.length
		}
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
				<div className="top">
					<Letters letter={this.state.letters[this.state.counter].letter}/>
				</div>

				<Draw incrementCounter={this.incrementCounter} counter={this.state.counter} />
				<div className="learn">
					<Prononciation prononciation={this.state.letters[this.state.counter]} />
				</div>

				<div className="bottom">
					<Back backAndForth={this.backAndForth}/>
					<Counter counter={this.state.counter} total={this.state.total}/>
					<Forth backAndForth={this.backAndForth}/>
				</div>
			</Fragment>
			)
  }
}

export default Alphabet;
