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
  }

  render() {
    const { product, image } = this.props;

    return(
      <div className="product-item">
        <img src={image.link.href} />
        <div>Name: { product.name }</div>
        <div>Desc: { product.description }</div>
        <div>Price: { product.meta.display_price.with_tax.formatted }</div>
      </div>
    );
  }
}

export default ProductList;
