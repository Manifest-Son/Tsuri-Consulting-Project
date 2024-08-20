/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";
import useStore from "../../store/store.js"; // Zustand store

// eslint-disable-next-line react/prop-types
function ProtectedRoutes({ children }) {
  const { user } = useStore(); // Get the authenticated user from Zustand

  // Check if the user is authenticated and is an admin
  if (!user || user.role !== "admin") {
    // If not authenticated or not an admin, redirect to the login page or home page
    return <Navigate to="/login" replace />;
  }

  // If authenticated and an admin, render the children (admin pages)
  return children;
}

export default ProtectedRoutes;
