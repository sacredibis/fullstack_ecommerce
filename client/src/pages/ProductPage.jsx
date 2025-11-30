import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product/ProductDetails';

const product = { 
  id: 1, 
  name: 'Product 1', 
  price: 99.99, 
  image: 'https://via.placeholder.com/600x400', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
};

const ProductPage = () => {
  const { id } = useParams();

  // In a real application, you would fetch the product by id
  return <ProductDetails product={product} />;
};

export default ProductPage;