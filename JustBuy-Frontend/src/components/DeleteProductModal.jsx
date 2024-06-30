import React, { useContext } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { deleteCustomStyles } from "../utils/schemas";
import axios from "axios";
const url = import.meta.env.VITE_MAIN_URL;
import Notify from "./Notify";
import ProductContext from "../contexts/ProductsProvider";

Modal.setAppElement("div");

export default function DeleteProductModal({ deleteModal, setDeleteModal }) {
  const { refreshProducts } = useContext(ProductContext);

  const closeModal = () => {
    setDeleteModal((prev) => {
      return { ...prev, isOpen: false };
    });
  };

  const handleDelete = () => {
    axios
      .delete(`${url}/products/${deleteModal.productID}`)
      .then(({ data }) => {
        closeModal();
        Notify(data.status, "success");
        refreshProducts();
      });
    //   .catch(() => setLoading(false));
  };

  return (
    <Modal
      isOpen={deleteModal.isOpen}
      onAfterClose={closeModal}
      onRequestClose={() => setModal(false)}
      style={deleteCustomStyles}
      contentLabel="Product"
    >
      <h1>Are you sure you want to delete this product?</h1>
      <div className="mt-7">
        <Button onClick={handleDelete} type="delete">
          Delete
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </Modal>
  );
}
