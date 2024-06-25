import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      <SideBar />
      <section className="w-full">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
