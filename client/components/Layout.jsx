import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popover from 'react-simple-popover';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      product: {},
      open: false,
    }
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
      })
    })
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const props = {
      ...this.props,
      add: this.addToCart,
    }
    return(
      <section id="layout">
        <h1>Sports and Goods</h1>
        <Link
          to="/cart"
          className="cart-button"
          ref="cart"
        >Cart</Link>
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
        {
          React.Children.map(this.props.children, child =>
            React.cloneElement(child,
              props,
          ))
        }
      </section>
    )
  }
}

export default Layout;
