import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Router1 from "./pages/Router1";

import ThemeProvider from "./context/ThemeContext";
import CartProvider from "./context/Cartcontext";

import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <ErrorBoundary>
          <RouterProvider router={Router1} />
        </ErrorBoundary>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);