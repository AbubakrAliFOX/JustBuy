import React from "react";
import WishlistTable from "./WishlistTable";

export default function Wishlist() {
  return (
    <section className="px-6 py-8 h-screen w-6/12 mx-auto">
      <h1 className="font-bold text-xl">My Wishlist</h1>
      <section className="mx-3 mt-6">
        <WishlistTable />
      </section>
    </section>
  );
}
