import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginForm/Login/Login";

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
    ],
  },
]);

export default routes;
