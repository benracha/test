import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckOut from "./components/CheckOut";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <RouterProvider
    router={router}
    fallbackElement={<></>}
  />
    </React.StrictMode>
  );