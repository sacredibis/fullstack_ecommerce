import React from 'react';

const ProductManagement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Product Management</h1>
      <div className="bg-white shadow-md rounded">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Product
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Inventory
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {/* Example Product Row */}
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Example Product</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">$99.99</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">100</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                <button className="text-red-600 hover:text-red-900 ml-4">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="mt-8 bg-primary-light text-white font-bold py-2 px-4 rounded hover:bg-green-700">
        Add New Product
      </button>
    </div>
  );
};

export default ProductManagement;
