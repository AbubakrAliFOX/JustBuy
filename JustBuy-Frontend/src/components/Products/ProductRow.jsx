import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import FormButton from "../form/FormButton";
import DeleteProductModal from "./DeleteProductModal";

export default function ProductRow({ data, setModal }) {
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    productID: null,
  });

  const handleDisplayProduct = () => {
    setModal((prev) => {
      return { productID: data.id, isOpen: true, mode: "display" };
    });
  };

  const handleEdit = () => {
    setModal((prev) => {
      return { productID: data.id, isOpen: true, mode: "edit" };
    });
  };

  const openDeleteModal = () => {
    setDeleteModal((prev) => {
      return { ...prev, isOpen: true, productID: data.id };
    });
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.category.name}</td>
      <td>{data.stock}</td>
      <td>
        <img
          className="max-h-40"
          src={data.thumbnail_url}
          alt={`${data.name}'s image`}
        />
      </td>
      <td>
        <Button onClick={handleEdit}>Edit</Button>
        <FormButton onClick={openDeleteModal} type="delete">
          Delete
        </FormButton>
      </td>
      <DeleteProductModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </tr>
  );
}
