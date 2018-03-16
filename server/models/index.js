import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const db = {};

sequelize = new Sequelize('ecommerce-example', 'Jin', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

export default Objext.assign({}, {
  sequelize,
  Sequelize,
}, db);
