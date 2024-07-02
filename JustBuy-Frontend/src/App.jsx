import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";

import DefaultLayout from "./layout/DefaultLayout";
import ProductsIndex from "./components/Products/ProductsIndex";
import CategoriesIndex from "./components/Categories/CategoriesIndex";
import Index from "./pages/Index";
import CheckOut from "./pages/CheckOut";
import ConfirmEmail from "./components/Auth/ConfirmEmail";
import { RequireAuth, NotRequireAuth } from "./components/Auth/AuthComponents";
import { RequireVerification } from "./components/Auth/RequireVerification";
import OrdersDisplay from "./components/Orders/OrdersDisplay";
import OrdersTable from "./components/Orders/OrdersTable";
import EmailVerified from "./components/Auth/EmailVerified";
import { RequireAdmin } from "./components/Auth/RequireAdmin";
import ResetPassword from "./components/Auth/ResetPassword";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Public */}
          <Route path="/" element={<Index />} />

          <Route element={<RequireAuth />}>
            {/* Requires Auth */}

            <Route path="email/verify" element={<ConfirmEmail />} />
            <Route path="email/verify/:id/:hash" element={<EmailVerified />} />
            <Route path="verified" element={<RequireVerification />}>
              {/* Requires Verification */}

              <Route path="orders" element={<OrdersDisplay />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="dashboard" element={<RequireAdmin />}>
                {/* Requires being Admin */}

                <Route path="products" element={<ProductsIndex />} />
                <Route path="categories" element={<CategoriesIndex />} />
                <Route path="orders" element={<OrdersTable />} />
              </Route>
            </Route>
          </Route>

          {/* Can't access if authed */}
          <Route element={<NotRequireAuth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
