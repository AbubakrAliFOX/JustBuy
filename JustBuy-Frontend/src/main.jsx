import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import { ProductProvider } from "./contexts/ProductsProvider.jsx";
import { CategoryProvider } from "./contexts/CategoriesProvider.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ProductProvider>
        <CategoryProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </CategoryProvider>
      </ProductProvider>
    </ContextProvider>
  </React.StrictMode>
);
