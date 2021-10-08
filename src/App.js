import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Section title="Please, leave feedback" />
        </header>
      </div>
    );
  }
}

export default App;
