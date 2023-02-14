import React, { useState } from "react";
import ProductsModal from "../Product/ProductsModal";

function SubCategoryItem({ subCategory, products }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <a onClick={showModal} className="subCategoryLink" href="#">
        <img
          src={products[0].url}
          alt={products[0].name}
          width="100px"
          height="100px"
        />
        <p>{subCategory}</p>
        <p>{products[0].name}</p>
      </a>
      <ProductsModal
        subCategory={subCategory}
        products={products}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default SubCategoryItem;
