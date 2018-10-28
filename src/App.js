import React, { Component } from 'react';
import AppContainer from './container/appContainer'
import './App.css';

class App extends Component {

  state = {
    productList: []
  }
  
  handleSubmit(e){
    alert(e.target.formSearch.value)
  }

  render() {
    return (
      <div className="App">
        <AppContainer  handleSubmit={(e) => this.handleSubmit(e)}/>
      </div>
    );
  }
}

export default App;
