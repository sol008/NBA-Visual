import React, { Component } from 'react';
import '../styles/App.css';
import { TopBar } from './TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
      </div>
    );
  }
}

export default App;
