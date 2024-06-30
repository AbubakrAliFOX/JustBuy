import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";

import DefaultLayout from "./layout/DefaultLayout";
import ProductsIndex from "./components/ProductsIndex";
import CategoriesIndex from "./components/CategoriesIndex";
import Index from "./pages/Index";
import CheckOut from "./pages/CheckOut";
import ConfirmEmail from "./components/ConfirmEmail";
import { RequireAuth, NotRequireAuth } from "./components/AuthComponents";
import { RequireVerification } from "./components/VerificationComponents";
import OrdersDisplay from "./components/OrdersDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Public */}
          <Route path="/" element={<Index />} />

          {/* Protected */}
          <Route element={<RequireAuth />}>
            <Route path="verified" element={<RequireVerification />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="products" element={<ProductsIndex />} />
                <Route path="categories" element={<CategoriesIndex />} />
              </Route>
              <Route path="orders" element={<OrdersDisplay />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>
            <Route path="email/verify" element={<ConfirmEmail />} />
          </Route>

          {/* Can't access if logged in */}
          <Route element={<NotRequireAuth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
