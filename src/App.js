import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WelcomeDesktop from './components/welcomeDesktop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: ""
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      innerWidth: window.innerWidth
    });
  }

  render() {
    let page = null;
    if (this.state.innerWidth >= 1025 || window.innerWidth >= 1025) {
      page = <WelcomeDesktop />
    }
    return (
      page ? page :
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

