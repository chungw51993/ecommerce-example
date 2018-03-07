import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);
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
