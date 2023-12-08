import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { loader as menuLaoder } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderloader } from "./features/order/Order";
import { action as UpdateOrderac } from "./features/order/UpdateOrder";
import CreateOrder, {
  action as CreateOrderaction,
} from "./features/order/CreateOrder";

import AppLayout from "./UI/AppLayout";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLaoder,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderaction,
      },
      {
        path: "/order/:orderid",
        element: <Order />,
        loader: orderloader,
        errorElement: <Error />,
        action: UpdateOrderac,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
