import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AddPlant from "../pages/AddPlant/AddPlant";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/add-plant",
        element: <AddPlant/>
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  },
]);
