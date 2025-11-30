import React from 'react';
import ProductList from '../components/product/ProductList';

const products = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', price: 129.99, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', price: 79.99, image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Product 4', price: 149.99, image: 'https://via.placeholder.com/300' },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;