import React from "react";

export default function AdminWishlistCategory({ data }) {
  return (
    <div className="w-6/12 mt-5 border rounded-xl">
      <h1 className="font-bold p-3 text-xl bg-slate-400 overflow-hidden">
        {data.category}
      </h1>
      <ul>
        {data?.products?.map((el, idx) => (
          <li key={idx} className="m-3">{el.product_name}</li>
        ))}
      </ul>
    </div>
  );
}
