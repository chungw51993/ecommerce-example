import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Layout extends Component {
  constructor(props) {
    super(props);
  }

  addToCart() {

  }

  render() {
    return(
      <section id="layout">
        <h1>Sports and Goods</h1>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child,
            this.props,
        ))}
      </section>
    )
  }
}

export default Layout;
