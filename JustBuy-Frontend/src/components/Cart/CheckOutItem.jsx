import React, { useContext } from "react";
import CartContext from "../../contexts/CartProvider";

export default function CheckOutItem({ data }) {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    setCart((prev) => {
      let rest = prev.filter((el) => el.name !== data.name);
      return [...rest];
    });
  };
  return (
    <div className="w-6/12 mb-3 pr-6 pl-1 py-3 rounded-lg flex justify-between items-center bg-stone-100">
      <div className="w-36">{data.name}</div>
      <div>{data.qty}</div>
      <div>USD {data.price}</div>
      {/* <img src="cart.svg" alt="" /> */}
      <img
        className="cursor-pointer w-6 h-6"
        onClick={handleClick}
        src="https://www.svgrepo.com/show/533020/trash-list-alt.svg"
        alt="trash"
        id="remove"
      />
    </div>
  );
}
