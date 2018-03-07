import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      image: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { location } = this.props;

    axios({
      method: 'GET',
      url: `/api/product/${location.pathname.split('/')[1]}`
    }).then((prod) => {
      const { data } = prod.data;
      const { main_images } = prod.data.included;
      this.setState({
        product: data,
        image: main_images[0].link.href,
      })
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    const { product, image } = this.state;

    return (
      <section id="detail">
        <h1>{ product.name }</h1>
        <img src={image} />
        <div>{ product.description }</div>
        <div>Price: { product.meta ? product.meta.display_price.with_tax.formatted : null }</div>
      </section>
    );
  }
}

export default Detail;
