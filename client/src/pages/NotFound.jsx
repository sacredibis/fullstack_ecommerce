import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold mb-4">Page Not Found</p>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-primary-light text-white font-bold py-2 px-4 rounded hover:bg-green-700">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
