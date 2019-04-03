import React, { Component } from 'react';
import '../styles/App.css';
import { TopBar } from './TopBar';
import { Main } from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
