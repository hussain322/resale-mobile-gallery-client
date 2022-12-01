import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Orders/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginForm/Login/Login";
import Register from "../Pages/LoginForm/Register/Register";
import Phones from "../Pages/Phones/Phones";
import AddProduct from "../Pages/Product/AddProduct/AddProduct";
import MyProduct from "../Pages/Product/MyProduct/MyProduct";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Phones />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoutes>
            <AllSellers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoutes>
            <AllBuyers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct />
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default routes;
