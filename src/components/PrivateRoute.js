import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('User details'); // Check if user is authenticated

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;