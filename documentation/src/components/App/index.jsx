import React, { Component } from 'react';
import Header from '../Header';
import './style.css';

class App extends Component {
  render() {
    const appTitle = 'Jest';
    const versions = ['2.0', '1.0', 'beta'];
    return (
      <div className="App">
        <Header
          title={ appTitle }
          versions={ versions }
        />
      </div>
    );
  }
}

export default App;
