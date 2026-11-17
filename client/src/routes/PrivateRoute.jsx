import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute() {
  const auth = useAuth();

  if (auth?.isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}
