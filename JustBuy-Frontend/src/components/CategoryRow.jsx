import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import FormButton from "./form/FormButton";
import DeleteProductModal from "./DeleteProductModal";

export default function CategoryRow({ data, setModal }) {
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    categoryID: null,
  });

  //   const handleDisplayProduct = () => {
  //     setModal((prev) => {
  //       return { categoryID: data.id, isOpen: true, mode: "display" };
  //     });
  //   };

  const handleEdit = () => {
    setModal((prev) => {
      return { categoryID: data.id, isOpen: true, mode: "edit" };
    });
  };

  const openDeleteModal = () => {
    setDeleteModal((prev) => {
      return { ...prev, isOpen: true, categoryID: data.id };
    });
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
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
