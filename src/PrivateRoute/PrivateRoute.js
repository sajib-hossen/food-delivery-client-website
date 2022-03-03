import React from "react";
import useAuth from "./../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    <Spinner animation="border" />;
  }

  if (user.email) {
    return children;
  } else {
    return <Navigate to="/loginheader" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
