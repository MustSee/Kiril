import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alphabet from './alphabet';
import Home from './home';
import Contact from './contact';
import Words from './words';

export default class Main extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/alphabet' component={Alphabet} />
          <Route path='/words' component={Words} />
          <Route path='/contact' component={Contact} />
        </Switch>
    );
  }
}