const { Product } = require('../models');

const productData = [
  // {
  //   product_name: 'Plain T-Shirt',
  //   price: 12.99,
  //   stock: 10,
  //   category_id: 1, // Assuming category_id 1 corresponds to 'Shirts'
  // },
  // {
  //   product_name: 'Running Shorts',
  //   price: 24.99,
  //   stock: 15,
  //   category_id: 2, // Assuming category_id 2 corresponds to 'Shorts'
  // },
  // {
  //   product_name: 'Wireless Headphones',
  //   price: 89.99,
  //   stock: 5,
  //   category_id: 3, // Assuming category_id 3 corresponds to 'Music'
  // },
  // Add more products as needed
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
