import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AddPlant from "../pages/AddPlant/AddPlant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/add-plant",
        element: <AddPlant/>
      }
    ]
  },
]);
