import React, { useEffect, useState, useContext } from "react";
import FormField from "../form/FormField";
import FormButton from "../form/FormButton";
import axios from "axios";
import { Formik, Form } from "formik";
import { categorySchema } from "../../schemas";
import Modal from "react-modal";
import Button from "../Button";
import { customStyles } from "../../utils/schemas";
import Notify from "../Notify";
import CategoryContext from "../../contexts/CategoriesProvider";
import { useAuthContext } from "../../contexts/AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

Modal.setAppElement("div");

export default function CategoryModal({
  modal,
  setModal,
  category,
  setCategory,
}) {
  const { token } = useAuthContext();
  const { refreshCategories } = useContext(CategoryContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modal.categoryID && modal.mode == "edit") {
      setLoading(true);
      axios
        .get(`${url}/categories/${modal.categoryID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        })
        .then(({ data }) => {
          console.log(data);
          console.log(data.data.category);
          setCategory(data.data.category);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [modal.isOpen, modal.categoryID, modal.mode]);

  const closeModal = () => {
    setModal((prev) => {
      return { ...prev, isOpen: false, categoryID: null, mode: null };
    });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let response;
      if (modal.mode == "edit") {
        console.log("Edit");
        response = await axios.patch(
          `${url}/categories/${modal.categoryID}`,
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
          `${url}/categories`,
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
      refreshCategories();
      setSubmitting(false);
    }
  };
  return (
    <Modal
      isOpen={modal.isOpen}
      onAfterClose={closeModal}
      onRequestClose={() => setModal(false)}
      style={customStyles}
      contentLabel="Category"
    >
      {loading ? (
        <div>Loading ..... </div>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={category}
          onSubmit={handleSubmit}
          validationSchema={categorySchema}
        >
          {({ isSubmitting, isValid, dirty, errors, touched }) => (
            <Form className="flex flex-col w-full">
              <div className="w-full">
                <label htmlFor="id">ID: </label>
                <input
                  name="id"
                  id="id"
                  type="text"
                  value={modal.categoryID}
                  readOnly
                />
                <FormField name="name" />
                <FormField name="subcategory" />
              </div>
              <div className="py-4">
                <FormButton disabled={isSubmitting} href="#" type="submit">
                  {modal.mode == "edit" ? "Update" : "Add"} Category
                </FormButton>
                <Button onClick={closeModal} type="delete">
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
}
