import React from "react";
import OrderItem from "./OrderItem";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function OrderCard({ data, isAdmin }) {
  const { user } = useAuthContext();
  return (
    <div className="border border-b-0 rounded-xl overflow-clip mb-6">
      <div className="bg-slate-400 flex flex-wrap justify-start pl-4">
        <div className="mt-2 mr-6 mb-2">
          <p>
            <b>Order Placed</b>
          </p>
          <p>
            {new Date(data.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="mt-2 mr-6 mb-2">
          <p>
            <b>Total</b>
          </p>
          <p>USD {data.total_price}</p>
        </div>
        {isAdmin && (
          <div className="mt-2 mr-6 mb-2">
            <p>
              <b>User ID</b>
            </p>
            <p>{data.user_id}</p>
          </div>
        )}
        {/* <div className="mt-2 mr-6 mb-2">
          <p>
            <b>Deliver To</b>
          </p>
          <p>{userAddress}</p>
        </div> */}
      </div>
      <div className="w-full h-full rounded text-lg mt-3 px-2">
        {data.products.map((el, idx) => (
          <OrderItem key={idx} data={el} />
        ))}
      </div>
    </div>
  );
}
