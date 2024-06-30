import React from "react";

export default function OrderItem({ data }) {
  return (
    <div className="flex mt-3 mx-0 mb-2 pb-2 items-center border-b-2">
      {/* <Suspense fallback={<ImgLoader />}>
        <ItemImg imageUrl={imageUrl} />
      </Suspense> */}
      <p className="w-6/12">{data.name}</p>
      <p className="w-3/12 text-xl">{data.quantity} pcs</p>
      <p className="w-3/12 text-xl">USD {data.price}</p>
    </div>
  );
}
