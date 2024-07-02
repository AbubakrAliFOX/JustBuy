import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import axios from "axios";

const url = import.meta.env.VITE_MAIN_URL;

export const RequireAdmin = () => {
  const { token, isAdmin, setIsAdmin, redirectIfNotAdmin } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/admin/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsAdmin(true);
        console.log("Is Admin", data.data);
      })
      .catch((error) => {
        setIsAdmin(false);
        Notify("You are not authorized", "error");
        navigate("/");
        console.log("Not Admin", error);
      });
  }, [token, navigate, setIsAdmin]);

  return (
    <div className="flex h-80">
      <SideBar />
      <section className="px-6 py-8 h-screen overflow-y-scroll w-full">
        <Outlet />
      </section>
    </div>
  );
};
