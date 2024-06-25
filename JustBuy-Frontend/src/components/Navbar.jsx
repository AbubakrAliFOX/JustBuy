import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function Navbar() {
  const { user } = useStateContext();
  const logOut = (e) => {
    e.preventDefault();
  };
  return (
    <nav>
      <h1>{user.name}</h1>
      <a onClick={logOut} href="#">
        Logout
      </a>
    </nav>
  );
}
