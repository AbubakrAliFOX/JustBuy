import React, { useContext } from "react";
import WishlistContext from "../../contexts/WishlistProvider";

export default function WishlistItem({ data }) {
  const { wishlist, setWishlist, DeleteFromWishlist } =
    useContext(WishlistContext);

  const priceAfterDiscount = (
    data.price -
    (data.discount_percentage / 100) * data.price
  ).toFixed(2);

  console.log("Data id wishlist", data);

  const handleClick = () => {
    DeleteFromWishlist(data.id);
  };

  return (
    <div className="w-full mb-3 pr-6 pl-1 py-3 rounded-lg flex justify-between items-center bg-stone-100">
      <div className="w-36">{data.name}</div>
      <div className="font-bold text-purple-500">
        USD {priceAfterDiscount} -{" "}
        <span className="line-through font-light">{data.price}</span>
      </div>
      <div className="w-36">{data.availability_status}</div>
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
