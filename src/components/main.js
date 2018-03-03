import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Alphabet from './alphabet';
import Home from './home';
import Games from './games';
import Culture from './culture';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/alphabet' component={Alphabet} />
          <Route path='/games' component={Games} />
          <Route path='/culture' component={Culture} />
        </Switch>
      </HashRouter>
    );
  }
}