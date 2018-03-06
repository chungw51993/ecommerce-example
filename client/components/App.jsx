import React, { Component } from 'react';
import axios from 'axios';

import ProductList from './products/Products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        products: [],
        images: [],
      },
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
      const items = {
        products: data.data,
        images: data.included.main_images,
      }
      this.setState({
        items,
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
