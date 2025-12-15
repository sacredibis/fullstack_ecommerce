import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          E-Store
        </Link>
        <div className="flex-grow text-center">
          <div className="relative w-full max-w-sm mx-auto">
            <input
              type="text"
              className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:border-primary-light"
              placeholder="Search..."
            />
            <div className="absolute top-0 left-0 inline-flex items-center p-2">
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-800">
            <ShoppingCart className="h-6 w-6" />
            <span className="ml-2">Cart</span>
          </Link>
          <Link to="/login" className="ml-6 text-gray-600 hover:text-gray-800">
            Login
          </Link>
          <Link to="/register" className="ml-6 text-gray-600 hover:text-gray-800">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
