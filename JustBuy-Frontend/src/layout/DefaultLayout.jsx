import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen" id="main">
      <SideBar />
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
