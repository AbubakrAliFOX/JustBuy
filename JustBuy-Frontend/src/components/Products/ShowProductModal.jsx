import React from "react";
import ProductItem from "./ProductItem";

export default function ShowProductModal() {
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
        <div className="flex justify-between w-full">
          <div className="w-full">
            <label htmlFor="id">ID: </label>
            <input
              name="id"
              id="id"
              type="text"
              value={modal.productID}
              readOnly
            />
            <ProductItem name="name" />
            <ProductItem name="description" />
            <ProductItem name="category" />
            <ProductItem name="subcategory" />
            <ProductItem name="price" type="number" />
            <ProductItem name="discount_percentage" type="number" />
            <ProductItem name="stock" type="number" />
            <ProductItem name="brand" />
          </div>
          <div className="w-full">
            <ProductItem name="sku" />
            <ProductItem name="weight" type="number" />
            <ProductItem name="shipping_information" />
            <ProductItem name="availability_status" />
            <ProductItem name="image_url" />
            <ProductItem name="thumbnail_url" />
            <div className="py-4">
              <FormButton disabled={isSubmitting} href="#" type="submit">
                {modal.mode == "edit" ? "Update" : "Add"} Product
              </FormButton>
              <Button onClick={closeModal} type="delete">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
