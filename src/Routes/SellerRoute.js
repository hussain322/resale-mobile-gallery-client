import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center w-full">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
