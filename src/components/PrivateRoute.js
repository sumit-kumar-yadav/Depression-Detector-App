import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isLoggedin }) {
  const location = useLocation();

  return isLoggedin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
