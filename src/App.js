import React, { Component } from 'react';
import AppContainer from './container/appContainer'
import './App.css';

class App extends Component {

  state = {
    productList: []
  }
  render() {
    return (
      <div className="App">
        <AppContainer />
      </div>
    );
  }
}

export default App;
