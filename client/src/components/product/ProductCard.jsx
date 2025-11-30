import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img className="w-full h-56 object-cover" src={product.image} alt={product.name} />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <button className="mt-4 bg-primary-light text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
