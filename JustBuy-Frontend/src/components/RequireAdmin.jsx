import React, { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import axios from "axios";
import Notify from "./Notify";

const url = import.meta.env.VITE_MAIN_URL;

export const RequireAdmin = () => {
  const { token, isAdmin, setIsAdmin } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/admin/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        if (data.data == true) {
          setIsAdmin(data.data);
          console.log("Is Admin?", data.data);
        } else {
          setIsAdmin(false);
          Notify("You are not authorized", "error");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("errrr", error);
      });
  }, [isAdmin, token]);

  //   useEffect(() => {
  //     console.log("Is Email verified?", isEmailVerified);
  //   }, [isEmailVerified]);

  return true ? (
    <main className="flex">
      <SideBar />
      <section className="px-6 py-8 h-screen overflow-y-scroll w-full">
        <Outlet />
      </section>
    </main>
  ) : (
    <Navigate to="/email/verify" />
  );
};
