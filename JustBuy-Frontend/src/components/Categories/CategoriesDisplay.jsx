import React, { useContext, useState } from "react";
import Button from "../Button";
import CategoryModal from "./CategoryModal";
import CategoryRow from "../Categories/CategoryRow";
import CategoryContext from "../../contexts/CategoriesProvider";

export default function CategoriesDisplay() {
  const [modal, setModal] = useState({
    isOpen: false,
    mode: null,
    categoryID: null,
  });

  const { categories } = useContext(CategoryContext);

  const [category, setCategory] = useState({
    name: "",
    category: "",
    subcategory: "",
  });

  const handleAddCategory = () => {
    setModal((prev) => {
      return { ...prev, editMode: false, isOpen: true, categoryID: null };
    });
    setCategory({
      name: "",
      category: "",
      subcategory: "",
    });
  };
  return (
    <>
      <div className="my-8">
        <Button onClick={handleAddCategory} href="#">
          Add Category
        </Button>
      </div>
      <table className="w-full h-full rounded text-center text-lg border border-solid">
        <thead className="bg-dark text-white">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Edit/Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((el) => (
            <CategoryRow
              modal={modal}
              setModal={setModal}
              key={el.id}
              data={el}
            />
          ))}
        </tbody>
        <CategoryModal
          modal={modal}
          setModal={setModal}
          category={category}
          setCategory={setCategory}
        />
      </table>
    </>
  );
}
