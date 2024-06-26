import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, to }) {
  return (
    <Link
      to={to}
      className="w-80 font-bold text-lg p-6 transition-colors duration-300 hover:bg-white hover:text-black "
    >
      {children}
    </Link>
  );
}
