import React, { useContext } from "react";
import CartContext from "../contexts/CartProvider";

export default function AddToCart({ name, price }) {
  const { cart, setCart } = useContext(CartContext);
  const handleClick = () => {
    // if (userData?.name) {
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
    // } else {
    //   navigate("/login", {
    //     state: { showToast: "value", toastMsg: "You have to be logged in!" },
    //   });
    // }
  };

  return (
    <a
      onClick={handleClick}
      className="w-full rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer flex justify-center"
    >
      <img className="w-20 h-10 my-1.5" src="cart.svg" alt="Cart" />
    </a>
  );
}
