import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <main className="flex">
      <SideBar />
      <section className="px-6 py-8 h-screen overflow-y-scroll w-full">
        <Outlet />
      </section>
    </main>
  );
}
