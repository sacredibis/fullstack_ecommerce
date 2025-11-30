import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
          <p className="text-3xl font-bold text-primary-light">$12,345.67</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold text-primary-light">123</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl font-bold text-primary-light">45</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
