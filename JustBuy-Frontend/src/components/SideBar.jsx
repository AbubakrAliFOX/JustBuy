import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function SideBar() {
  return (
    <aside className="h-screen bg-dark text-white text-center flex">
      <div className="flex flex-col my-auto">
        <NavLink to="/dashboard/products">Products</NavLink>
        <NavLink to="/dashboard/categories">Categories</NavLink>
        <NavLink to="/dashboard/orders">Orders</NavLink>
      </div>
    </aside>
  );
}
