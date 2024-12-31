import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';  

  return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
