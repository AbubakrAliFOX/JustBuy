import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import router from "./Router.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { ProductProvider } from "./contexts/ProductsProvider.jsx";
import { CategoryProvider } from "./contexts/CategoriesProvider.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";
import { VerificationProvider } from "./contexts/VerificationProvider.jsx";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { OrdersProvider } from "./contexts/OrdersProvider.jsx";
import { WishlistProvider } from "./contexts/WishlistProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VerificationProvider>
          <ProductProvider>
            <CategoryProvider>
              <CartProvider>
                <WishlistProvider>
                  <OrdersProvider>
                    <App />
                  </OrdersProvider>
                </WishlistProvider>
              </CartProvider>
            </CategoryProvider>
          </ProductProvider>
        </VerificationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
