import React, { useContext } from "react";
import Modal from "react-modal";
import Button from "../Button";
import { deleteCustomStyles } from "../../utils/schemas";
import axios from "axios";
const url = import.meta.env.VITE_MAIN_URL;
import Notify from "../Notify";
import CategoryContext from "../../contexts/CategoriesProvider";
import { useAuthContext } from "../../contexts/AuthProvider";

Modal.setAppElement("div");

export default function DeleteCategoryModal({ deleteModal, setDeleteModal }) {
  const { refreshCategories } = useContext(CategoryContext);
  const { token } = useAuthContext();

  const closeModal = () => {
    setDeleteModal((prev) => {
      return { ...prev, isOpen: false };
    });
  };

  const handleDelete = () => {
    console.log(deleteModal.categoryID);
    axios
      .delete(`${url}/categories/${deleteModal.categoryID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        closeModal();
        console.log(data);
        Notify(data.status, "success");
        refreshCategories();
      })
      .catch((error) => {
        console.log("Delete err", error);
      });
  };

  return (
    <Modal
      isOpen={deleteModal.isOpen}
      onAfterClose={closeModal}
      onRequestClose={() => setModal(false)}
      style={deleteCustomStyles}
      contentLabel="Category"
    >
      <h1>Are you sure you want to delete this category?</h1>
      <div className="mt-7">
        <Button onClick={handleDelete} type="delete">
          Delete
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Modal>
  );
}
