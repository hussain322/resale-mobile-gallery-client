import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Orders/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginForm/Login/Login";
import Register from "../Pages/LoginForm/Register/Register";
import Phones from "../Pages/Phones/Phones";
import AddProduct from "../Pages/Product/AddProduct/AddProduct";
import MyProduct from "../Pages/Product/MyProduct/MyProduct";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
      {
        path: "/myProduct",
        element: <MyProduct />,
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
    ],
  },
]);

export default routes;
