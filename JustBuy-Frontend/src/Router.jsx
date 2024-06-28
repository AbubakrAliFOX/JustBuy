import { Navigate, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";
import Signup from "./pages/Signup";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";

import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";
import ProductsIndex from "./components/ProductsIndex";
import CategoriesIndex from "./components/CategoriesIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/products",
            element: <ProductsIndex />,
          },
          {
            path: "/dashboard/categories",
            element: <CategoriesIndex />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
