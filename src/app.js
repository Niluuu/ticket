import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './common/nav';
import Frontend from './front-end';
import Backend from './backend';
const uniqid = require('uniqid');
console.log(uniqid());

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/front-end">
            <Frontend />
          </Route>
          <Route path="/backend">
            <Backend />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
