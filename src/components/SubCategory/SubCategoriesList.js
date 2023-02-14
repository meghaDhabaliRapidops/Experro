import React from "react";
import SubCategory from "./SubCategory";
import { Row, Typography } from "antd";
const { Title } = Typography;

function SubCategoriesList({ categories }) {
  return (
    <>
      {categories &&
        categories.map((category) => {
          return (
            <div key={category.name} id={category.name} className="categoryDiv">
              <Title level={1} className="categoryTitle">
                {category.name}
              </Title>
              <Row key={category.name} gutter={4}>
                  <SubCategory subCategories={category.subcategories} />
              </Row>
            </div>
          );
        })}
    </>
  );
}

export default SubCategoriesList;
