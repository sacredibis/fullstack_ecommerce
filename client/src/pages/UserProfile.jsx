import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">My Orders</h2>
        {/* Example Order */}
        <div className="border-b py-4">
          <p className="font-semibold">Order #12345</p>
          <p>Date: 2025-11-28</p>
          <p>Total: $123.45</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
