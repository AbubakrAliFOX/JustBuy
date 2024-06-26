import React, { useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_MAIN_URL;
const auth = 2;

export default function ProductsDisplay() {
  useEffect(() => {
    axios
      .get(`${url}/products`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setOrders((prev) => response.data.prevOrders);
        setReservations((prev) => response.data.prevReservations);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td className="numbers-td">ID</td>
          <td>Name</td>
          <td>Category</td>
          <td>Stock</td>
          <td>Image</td>
          <td>Edit/Delete</td>
        </tr>
      </thead>
      <tbody>
        {/* {reservations.map((el, idx) => (
          <ReservationRow key={idx + 10} data={el.reservation} idx={idx} />
        ))} */}
      </tbody>
    </table>
  );
}
