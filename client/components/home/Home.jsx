import React, { Component } from 'react';
import axios from 'axios';
import Popover from 'react-simple-popover';

import ProductList from './Products';

class Home extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      items: {
        products: [],
        images: [],
      },
      product: {},
      open: false,
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

  addToCart(pid) {
    axios({
      method: 'POST',
      url: '/api/product',
      data: {
        pid,
      },
    }).then((product) => {
      this.setState({
        product,
        open: true,
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { items } = this.state;

    return(
      <section id="home">
        <ProductList
          products={items}
          redirect={this.props.history}
          add={this.addToCart}
        />
        <Popover
          placement="bottom"
          container={this}
          target={this.refs.cart}
          show={this.state.open}
          onHide={this.handleClose.bind(this)}
          containerStyle={{
            marginTop: '35px',
          }}>
          <p>This is popover</p>
        </Popover>
      </section>
    );
  }
}

export default Home;
