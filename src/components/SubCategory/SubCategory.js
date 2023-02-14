import React from "react";
import SubCategoryItem from "./SubCategoryItem";

function SubCategory({ subCategories }) {
  return (
    <>
      {subCategories &&
        subCategories.map((subCategory) => {
          return (
            <div key={subCategory.name}>
              <SubCategoryItem subCategory={subCategory.name} products={subCategory.products} />
            </div>
          );
        })}
    </>
  );
}

export default SubCategory;
