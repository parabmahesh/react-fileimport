import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileImporter from './components/fileimporter/FileImporter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FileImporter></FileImporter>
        </header>
      </div>
    );
  }
}

export default App;
