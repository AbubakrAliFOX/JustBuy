import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout() {
  return (
    <div className="flex h-screen" id="main">
      <section className="w-full">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </section>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
