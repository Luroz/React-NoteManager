import React, { Component } from 'react';
import NoteView from './NoteView'
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
