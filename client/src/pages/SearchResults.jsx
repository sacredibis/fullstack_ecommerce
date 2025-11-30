import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/product/ProductList';

const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/300' },
];

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Search Results for: "{query}"</h1>
      <ProductList products={products} />
    </div>
  );
};

export default SearchResults;
