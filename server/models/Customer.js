export default (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
  });

  return Customer;
};
