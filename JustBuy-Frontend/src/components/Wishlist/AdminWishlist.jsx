import React from "react";
import AdminWishlistTable from "./WishlistAdminTable";
import PageTitle from "../PageTitle";

export default function AdminWishlist() {
  return (
    <>
      <PageTitle>List of products:</PageTitle>
      <AdminWishlistTable />
    </>
  );
}
