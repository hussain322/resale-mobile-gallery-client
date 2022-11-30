import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content w-[90%] mx-auto">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-purple-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <h1 className="text-center font-semibold text-2xl text-orange-500 shadow-md p-4">
              Dashboard
            </h1>
            <li className="mt-6">
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
            {isAdmin && (
              <li className="">
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            )}
            <li className="">
              <Link to="/dashboard/allsellers">All Sellers</Link>
            </li>
            <li className="">
              <Link to="/dashboard/allbuyers">All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
