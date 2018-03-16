export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  });

  return Product;
};
