import React, {Component} from 'react';
import './App.css';
import bulgare from './datas/bulgarian/alphabet';
import Alphabet from './components/alphabet';
import Counter from './components/counter';
import Draw from './components/draw';
import HomePage from './components/backToHomepage';
import Prononciation from './components/prononciation';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			letters : bulgare,
			counter : 0,
			total : bulgare.length
		}
		this.incrementCounter = this.incrementCounter.bind(this);
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

  render() {
  	console.log(this.state.letters);
  	return(
			<div className="global">
				<div className="top">
					<Alphabet letter={this.state.letters[this.state.counter].letter}/>
					<Counter counter={this.state.counter} total={this.state.total}/>
					<HomePage/>
				</div>
				<Draw incrementCounter={this.incrementCounter} />
				<Prononciation prononciation={this.state.letters[this.state.counter].prononciation} />
			</div>
			)
  }
}

export default App;
