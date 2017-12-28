import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {


	render() {
		return(
			<MuiThemeProvider>
			<div className="global">
				<Header />
				<Main />
			</div>
			</MuiThemeProvider>
		)
	}
}

export default App;
