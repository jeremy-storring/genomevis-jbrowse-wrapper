/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VolvoxPage from './pages/VolvoxPage';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './components/Container';


//Root sass file for webpack to compile
import './sass/main.scss';

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={VolvoxPage} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('jbrowse-wrapper-mount'));