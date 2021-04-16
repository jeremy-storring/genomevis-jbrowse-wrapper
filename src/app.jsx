/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Container from './components/Container';

//Root sass file for webpack to compile
import './sass/main.scss';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/(:source)' component={Container}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('jbrowse-wrapper-mount'));