const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const sequelize = require('../config/connection');

Category.hasMany(Product, {
  foreignKey: 'category_id',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
  sequelize,
};
