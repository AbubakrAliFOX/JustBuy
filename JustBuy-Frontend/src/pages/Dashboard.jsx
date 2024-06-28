import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="px-6 py-8 h-screen overflow-y-scroll">
      <Outlet />
    </div>
  );
}
