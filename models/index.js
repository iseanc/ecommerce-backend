// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// DONE: Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// DONE: Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// DONE: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// DONE: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
