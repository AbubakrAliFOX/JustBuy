import React from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import Button from "./Button";
import { Link } from "react-router-dom";
import Notify from "./Notify";
import axios from "axios";
import NavbarCart from "./NavbarCart";
import { useVerificationContext } from "../contexts/VerificationProvider";

const url = import.meta.env.VITE_MAIN_URL;

export default function Navbar() {
  const { user, setUser, token, setToken, isAdmin } = useAuthContext();

  const { isEmailVerified, setIsEmailVerified } = useVerificationContext();

  console.log("Haaaaa", localStorage.getItem("EmailVerified"));
  console.log("Haaaaa", user);

  async function handleLogout() {
    axios
      .post(`${url}/logout`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUser(null);
        setToken(null);
        setIsEmailVerified(false);
        Notify("Log out was successful", "success");
      })
      .catch((error) => {
        console.log("Couldn't Logout", error);
      });
  }
  return (
    <nav className="bg-stone-100 h-20 px-6 text-white text-center flex justify-between items-center">
      <div>
        <h1 className="text-black font-bold text-2xl">
          <Link to="/">
            {token && user.name && isEmailVerified
              ? `User: ${user.name}`
              : "JustBuy.com"}
          </Link>
        </h1>
      </div>
      {token ? (
        <div className="flex justify-start gap-2">
          {!isAdmin && <NavbarCart />}
          <Link
            className="h-12 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer"
            to="/settings"
          >
            Settings
          </Link>
          {!isAdmin && (
            <Link
              className="h-12 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer"
              to="/verified/orders"
            >
              My Orders
            </Link>
          )}
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div className="flex justify-start gap-2">
          <Link
            className="h-12 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="h-12 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
