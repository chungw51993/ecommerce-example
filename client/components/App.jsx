import React, { Component } from 'react';
import axios from 'axios';

import ProductList from './products/Products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    axios({
      method: 'GET',
      url: '/api/product',
    }).then((resp) => {
      const { data } = resp;
      this.setState({
        items: data.data,
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    const { items } = this.state;

    return(
      <section id="app">
        <h1>Sports and Goods</h1>
        <ProductList products={items} />
      </section>
    );
  }
}

export default App;
