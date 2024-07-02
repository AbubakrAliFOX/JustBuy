import React, { useContext } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useVerificationContext } from "../../contexts/VerificationProvider";
import WishlistContext from "../../contexts/WishlistProvider";
import Notify from "../Notify";

export default function AddToWishList({ product_id }) {
  const { AddToWishlist } = useContext(WishlistContext);
  const { token, isAdmin } = useAuthContext();
  const { isEmailVerified } = useVerificationContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (token) {
      if (isEmailVerified) {
        if (!isAdmin) {
          console.log("Pro Id", product_id);
          AddToWishlist(product_id);
        } else {
          Notify("You are permitted to do this action", "error");
          navigate("/");
        }
      } else {
        navigate("/email/verify");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <a
      onClick={handleClick}
      className="w-4/12 rounded-r-lg border border-l-white  bg-purple-700 hover:opacity-80 text-white cursor-pointer flex justify-center"
    >
      <img className="w-full h-8 my-1.5" src="empty-heart.svg" alt="Cart" />
    </a>
  );
}
