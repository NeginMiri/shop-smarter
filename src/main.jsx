import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/Home";
import Shope from "./page/Shope";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/Shope",
    Component: Shope,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
