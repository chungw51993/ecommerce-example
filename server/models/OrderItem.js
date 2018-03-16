export default (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.STRING,
  });

  return OrderItem;
};
