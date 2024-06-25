import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="w-80 bg-dark">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
    </aside>
  );
}
