import React, { useContext } from "react";
import CartContext from "../../contexts/CartProvider";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useVerificationContext } from "../../contexts/VerificationProvider";
import Notify from "../Notify";

export default function AddToCart({ name, price }) {
  const { cart, setCart } = useContext(CartContext);
  const { token, isAdmin } = useAuthContext();
  const { isEmailVerified } = useVerificationContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (token) {
      if (isEmailVerified) {
        if (!isAdmin) {
          setCart((prev) => {
            if (prev?.find((el) => el.name === name)) {
              let currEl = prev.find((el) => el.name === name);
              return [
                ...prev.filter((el) => el.name !== name),
                { name, price: price, qty: currEl.qty + 1 },
              ];
            } else {
              return [...prev, { name, price: price, qty: 1 }];
            }
          });
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
      className="w-8/12 rounded-l-lg rounded-bl-lg border border-l-white bg-purple-700 hover:opacity-80 text-white cursor-pointer flex justify-center"
    >
      <img className="w-full h-8 my-1.5" src="cart.svg" alt="Cart" />
    </a>
  );
}
