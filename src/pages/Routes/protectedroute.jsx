import { Outlet, Navigate } from "react-router-dom";
import React, { Children } from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
