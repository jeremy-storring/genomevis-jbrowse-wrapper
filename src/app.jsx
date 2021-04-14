/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JbrowsePage from './pages/JbrowsePage';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './components/Container';


//Root sass file for webpack to compile
import './sass/main.scss';

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={JbrowsePage} />
          <Route path='library(:sourceID)' component={JbrowsePage} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('jbrowse-wrapper-mount'));