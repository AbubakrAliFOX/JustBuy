import React, { useEffect, useState, useContext } from "react";
import FormField from "./form/FormField";
import FormButton from "./form/FormButton";
import axios from "axios";
import { Formik, Form } from "formik";
import { productSchema } from "../schemas";
import Modal from "react-modal";
import Button from "./Button";
import { customStyles } from "../utils/schemas";
import Notify from "./Notify";
import ProductContext from "../contexts/ProductsProvider";
import { useAuthContext } from "../contexts/AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

Modal.setAppElement("div");

export default function ProductModal({ modal, setModal, product, setProduct }) {
  const { token } = useAuthContext();

  const { refreshProducts } = useContext(ProductContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modal.productID && modal.mode == "edit") {
      setLoading(true);
      axios
        .get(`${url}/products/${modal.productID}`, {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          console.log(data.data.product);
          setProduct(data.data.product);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [modal.isOpen, modal.productID, modal.mode]);

  const closeModal = () => {
    setModal((prev) => {
      return { ...prev, isOpen: false, productID: null, mode: null };
    });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // e.preventDefault();
    try {
      let response;
      if (modal.mode == "edit") {
        console.log("Edit");
        response = await axios.patch(
          `${url}/products/${modal.productID}`,
          {
            ...values,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Notify(response.data.status, "success");
        console.log(response.data.status);
      } else {
        console.log("New");
        response = await axios.post(
          `${url}/products`,
          {
            ...values,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Notify(response.data.status, "success");
      }
    } catch (error) {
      Notify("Request failed", "fail");
      console.log(error);
    } finally {
      closeModal();
      refreshProducts();
      setSubmitting(false);
    }
  };
  return (
    <Modal
      isOpen={modal.isOpen}
      onAfterClose={closeModal}
      onRequestClose={() => setModal(false)}
      style={customStyles}
      contentLabel="Product"
    >
      {loading ? (
        <div>Loading ..... </div>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={product}
          onSubmit={handleSubmit}
          validationSchema={productSchema}
        >
          {({ isSubmitting, isValid, dirty, errors, touched }) => (
            <Form className="flex justify-between w-full">
              <div className="w-full">
                <label htmlFor="id">ID: </label>
                <input
                  name="id"
                  id="id"
                  type="text"
                  value={modal.productID}
                  readOnly
                />
                <FormField name="name" />
                <FormField name="description" />
                <FormField name="category" />
                <FormField name="subcategory" />
                <FormField name="price" type="number" />
                <FormField name="discount_percentage" type="number" />
                {/* <FormField name="Rating" /> */}
                <FormField name="stock" type="number" />
                <FormField name="brand" />
              </div>
              <div className="w-full">
                <FormField name="sku" />
                <FormField name="weight" type="number" />
                <FormField name="shipping_information" />
                <FormField name="availability_status" />
                <FormField name="image_url" />
                <FormField name="thumbnail_url" />
                <div className="py-4">
                  <FormButton disabled={isSubmitting} href="#" type="submit">
                    {modal.mode == "edit" ? "Update" : "Add"} Product
                  </FormButton>
                  <Button onClick={closeModal} type="delete">
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
}
