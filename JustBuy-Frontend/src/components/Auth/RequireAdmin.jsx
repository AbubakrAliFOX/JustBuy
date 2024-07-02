import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";

export const RequireAdmin = () => {
  const { token, isAdmin, setIsAdmin, redirectIfNotAdmin } = useAuthContext();

  useEffect(() => {
    redirectIfNotAdmin();
  }, []);

  return true ? (
    <div className="flex h-80">
      <SideBar />
      <section className="px-6 py-8 h-screen overflow-y-scroll w-full">
        <Outlet />
      </section>
    </div>
  ) : (
    <Navigate to="/email/verify" />
  );
};
