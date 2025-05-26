import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AddPlant from "../pages/AddPlant/AddPlant";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import AllPlants from "../pages/AllPlants/AllPlants";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import MyPlants from "../pages/MyPlants/MyPlants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-plants",
        element: <AllPlants />,
      },
      {
        path: "/plant-details/:id",
        element: <PlantDetails />,
      },
      {
        path: "/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-plants",
        element: <PrivateRoute><MyPlants/></PrivateRoute>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
