import React from "react";
import AddToCart from "./AddToCart";

export default function ProductCard({ data }) {
  const priceAfterDiscount = (
    data.price -
    (data.discount_percentage / 100) * data.price
  ).toFixed(2);
  return (
    <div className="flex flex-col justify-end w-full text-center border border-gray-900 rounded-lg">
      <img
        className="w-full"
        src={data.thumbnail_url}
        alt={`${data.name}'s image`}
      />
      <h2 className="text-md font-semibold">{data.name}</h2>
      <h3 className="font-bold text-purple-500">
        USD {priceAfterDiscount} -{" "}
        <span className="line-through font-light">{data.price}</span>
      </h3>
      <h3 className="font-bold text-purple-800">
        {data.discount_percentage}% Discount
      </h3>
      <div className="flex flex-row justify-start my-2 px-3">
        <AddToCart name={data.name} price={priceAfterDiscount} />
      </div>
    </div>
  );
}
