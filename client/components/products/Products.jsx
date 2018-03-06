import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return(
      <div className="product-list">
        {
          products.map(product =>
            <ProductItem product={product} key={product.id} />
          )
        }
      </div>
    )
  }
}

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return(
      <div className="product-item">
        <img url={`https://api.moltin.com/v2/files/${product.id}`} />
        <div>Name: { product.name }</div>
        <div>Desc: { product.description }</div>
        <div>Price: { product.meta.display_price.with_tax.formatted }</div>
      </div>
    );
  }
}

export default ProductList;
