import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/Navbar/NavLink";

export default function SideBar() {
  return (
    <aside className="h-screen bg-dark text-white text-center flex">
      <div className="flex flex-col my-auto">
        <NavLink to="/verified/dashboard/products">Products</NavLink>
        <NavLink to="/verified/dashboard/wishlist">Wishlisted Products</NavLink>
        <NavLink to="/verified/dashboard/categories">Categories</NavLink>
        <NavLink to="/verified/dashboard/orders">Orders</NavLink>
      </div>
    </aside>
  );
}
