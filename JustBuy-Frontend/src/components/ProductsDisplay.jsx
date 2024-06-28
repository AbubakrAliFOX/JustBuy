import React, { useEffect, useState, useContext } from "react";
import ProductContext from "../contexts/ProductsProvider";
import axios from "axios";
import ProductRow from "./ProductRow";
import Button from "./Button";
import ProductModal from "./ProductModal";

const url = import.meta.env.VITE_MAIN_URL;
const auth = 2;

export default function ProductsDisplay() {
  const [modal, setModal] = useState({
    isOpen: false,
    mode: null,
    productID: null,
  });

  const { products } = useContext(ProductContext);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    discount_percentage: "",
    stock: "",
    brand: "",
    sku: "",
    weight: "",
    shipping_information: "",
    availability_status: "",
    image_url: "",
    thumbnail_url: "",
  });

  const handleAddProduct = () => {
    setModal((prev) => {
      return { ...prev, editMode: false, isOpen: true, productID: null };
    });
    setProduct({
      name: "",
      description: "",
      category: "",
      subcategory: "",
      price: "",
      discount_percentage: "",
      stock: "",
      brand: "",
      sku: "",
      weight: "",
      shipping_information: "",
      availability_status: "",
      image_url: "",
      thumbnail_url: "",
    });
  };

  return (
    <>
      <div className="my-8">
        <Button onClick={handleAddProduct} href="#">
          Add Product
        </Button>
      </div>
      <table className="w-full h-full rounded text-center text-lg border border-solid">
        <thead className="bg-dark text-white">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Category</td>
            <td>Stock</td>
            <td>Image</td>
            <td>Edit/Delete</td>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => (
            <ProductRow
              modal={modal}
              setModal={setModal}
              key={el.id}
              data={el}
            />
          ))}
        </tbody>
        <ProductModal
          modal={modal}
          setModal={setModal}
          product={product}
          setProduct={setProduct}
        />
      </table>
    </>
  );
}
