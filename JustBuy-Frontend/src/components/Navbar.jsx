import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";

export default function Navbar() {
  const { user } = useStateContext();
  const logOut = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="bg-stone-100 h-20 px-6 text-white text-center flex justify-between items-center">
      <div>
        <p className="text-black font-bold text-lg">User: {user.name}</p>
      </div>
      <div>
        <Button to="/settings">Settings</Button>
        <Button to="/logout">Logout</Button>
      </div>
    </nav>
  );
}
