import React, { Component } from 'react';
import './App.css';
import Feedback from '../components/Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Feedback title="Please, leave feedback" />
        </header>
      </div>
    );
  }
}

export default App;
