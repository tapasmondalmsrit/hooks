import React from "react";
import { useAuth } from "./context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  // user ? <Navigate to="login" state={{ path: location.pathname }} /> : children;
  if (user !== null || user.username) {
    console.log("requireAuth-children", user);
    return children;
  } else {
    console.log("requireAuth-login", user);
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
  }
};

export default RequireAuth;
