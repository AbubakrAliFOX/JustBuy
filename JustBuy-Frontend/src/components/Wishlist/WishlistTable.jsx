import React, { useContext } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import WishlistItem from "./WishlistItem";
import WishlistContext from "../../contexts/WishlistProvider";

export default function WishlistTable() {
  const { isAdmin } = useAuthContext();
  const { wishlist } = useContext(WishlistContext);

  return wishlist?.length > 0 ? (
    wishlist.map((el, idx) => (
      <WishlistItem isAdmin={isAdmin} data={el} key={idx} />
    ))
  ) : (
    <h1>No wishlist products yet!</h1>
  );
}
