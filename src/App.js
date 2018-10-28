import React, { Component } from 'react';
import AppContainer from './container/appContainer'
import './App.css';

class App extends Component {

  state = {
    productList: []
  }
  
  handleSubmit(e){
    e.preventDefault()
    this.getApiProducts(e.target.formSearch.value)
  }

  listProducts(query) {

    const url =`https://api.mercadolibre.com/sites/MLA/search?q=${query}`

    fetch(url)
    .then((response) => response.json())
    .then((items) => {
      this.setState({
        productList: items.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.thumbnail
        }))
      })
    })
    .catch((error) => {
      console.error(error);
    });

  }

  render() {
    return (
      <div className="App">
        <AppContainer {...this.state}  handleSubmit={(e) => this.handleSubmit(e)}/>
      </div>
    );
  }
}

export default App;
