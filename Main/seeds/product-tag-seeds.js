const { ProductTag } = require('../models');

const productTagData = [
  // {
  //   product_id: 1, // Assuming product_id 1 corresponds to 'Plain T-Shirt'
  //   tag_id: 1,     // Assuming tag_id 1 corresponds to 'Casual'
  // },
  // {
  //   product_id: 2, // Assuming product_id 2 corresponds to 'Running Shorts'
  //   tag_id: 2,     // Assuming tag_id 2 corresponds to 'Sportswear'
  // },
  // {
  //   product_id: 3, // Assuming product_id 3 corresponds to 'Wireless Headphones'
  //   tag_id: 3,     // Assuming tag_id 3 corresponds to 'Electronics'
  // },
  // Add more product-tag relationships as needed
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
