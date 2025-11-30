import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary-light mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully.</p>
      <Link to="/" className="bg-primary-light text-white font-bold py-2 px-4 rounded hover:bg-green-700">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
