import React from "react";
import Button from "./Button";

export default function Product() {
  return (
    <tr>
      <td className="numbers-td">ID</td>
      <td>Name</td>
      <td>Category</td>
      <td>Stock</td>
      <td>Image</td>
      <td>
        <Button></Button>
        <Button></Button>
      </td>
    </tr>
  );
}
