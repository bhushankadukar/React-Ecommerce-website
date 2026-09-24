import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
import OrderSuccess from "./OrderSuccess";
import Payment from "./Payment";

const Router1 = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "home",
        element: <Home />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "product",
        element: <Product />,
      },

      {
        path: "payment",
        element: <Payment />,
      },

      {
        path: "success",
        element: <OrderSuccess />,
      },
    ],
  },
]);

export default Router1;