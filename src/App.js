import React, { Component } from 'react';
import NoteView from './NoteView'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NoteView />
      </React.Fragment>
    );
  }
}

export default App;
