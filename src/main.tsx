import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages";
import Saved from "@/pages/saved";
import Cart from "@/pages/cart";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
