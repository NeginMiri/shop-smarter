import { createRoot } from "react-dom/client";
import "./index.css";
import ProductDetails from "./page/ProductDetails";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/Home";
import Shope from "./page/Shope";
import Card from "./page/Card";
import Order from "./page/Order";
import CartProvider from "./Context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/Shope",
    Component: Shope,
  },
  {
    path: "/product/:id",
    Component: ProductDetails,
  },
  {
    path : "/Card",
    Component : Card ,
  },
  {
    
    path : "/Order",
    Component : Order ,
  
  }
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);
