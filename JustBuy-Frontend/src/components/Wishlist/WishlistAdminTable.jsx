import React, { useContext, useEffect } from "react";
import WishlistContext from "../../contexts/WishlistProvider";
import AdminWishlistCategory from "./AdminWishlistCategory";

export default function AdminWishlistTable() {
  const { wishlist, AdminWishlist } = useContext(WishlistContext);

  useEffect(() => {
    AdminWishlist();
  }, []);

  return wishlist.map((el, idx) => (
    <AdminWishlistCategory data={el} key={idx} />
  ));
}
