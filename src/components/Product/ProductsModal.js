import React from "react";
import { Modal } from "antd";
import Products from "./Products";

function ProductsModal({ subCategory, products, isModalOpen, setIsModalOpen }) {
  return (
    <>
      <Modal
        title={subCategory}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Products products={products} />
      </Modal>
    </>
  );
}

export default ProductsModal;
