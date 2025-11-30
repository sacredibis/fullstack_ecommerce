import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/product/ProductList';

const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 129.99, image: 'https://via.placeholder.com/300' },
];

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Category: {categoryName}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;
