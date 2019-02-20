import React, { Component } from 'react';
import AppView from './views/AppView'
import ProfileView from './views/ProfileView'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppView} />
          <Route exact path="/profile" component={ProfileView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
