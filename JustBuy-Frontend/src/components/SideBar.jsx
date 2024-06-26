import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function SideBar() {
  return (
    <aside className="h-screen bg-dark text-white text-center flex">
      <div className="flex flex-col my-auto">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </div>
    </aside>
  );
}
