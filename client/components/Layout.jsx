import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.refs);
  }

  render() {
    return(
      <section id="layout">
        <h1>Sports and Goods</h1>
        <Link
          to="/cart"
          className="cart-button"
          ref="cart"
        >Cart</Link>
        {
          React.Children.map(this.props.children, child =>
            React.cloneElement(child,
              this.props,
          ))
        }
      </section>
    )
  }
}

export default Layout;
