import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { products, images } = this.props.products;

    return(
      <div className="product-list">
        {
          products.map((product, i) =>
            <ProductItem
              product={product}
              image={images[i]}
              redirect={this.props.redirect}
              key={product.id}
            />
          )
        }
      </div>
    )
  }
}

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl() {
    this.props.redirect.push(`/${this.props.product.id}`)
  }

  render() {
    const { product, image } = this.props;

    return(
      <div className="product-item" onClick={this.goToUrl}>
        <img src={image.link.href} />
        <div>Name: { product.name }</div>
        <div>Desc: { product.description }</div>
        <div>Price: { product.meta.display_price.with_tax.formatted }</div>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default ProductList;
