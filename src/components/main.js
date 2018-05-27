import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alphabet from './alphabet';
import Home from './home';

export default class Main extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/alphabet' component={Alphabet} />
        </Switch>
    );
  }
}