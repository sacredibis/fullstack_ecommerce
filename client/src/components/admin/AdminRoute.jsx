import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Assuming you have an auth slice with user info

  return isAuthenticated && user?.role === 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
