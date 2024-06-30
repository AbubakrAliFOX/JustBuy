import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

export default function GuestLayout() {
  // const { token } = useAuthContext();

  // if (token) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      <Navbar />
      <main className="p-8 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
