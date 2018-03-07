import React, { Component } from 'react';
import axios from 'axios';

import ProductList from './Products';

class Home extends Component {
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
      <section id="home">
        <ProductList
          products={items}
          redirect={this.props.history}
        />
      </section>
    );
  }
}

export default Home;
