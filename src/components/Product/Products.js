import React from "react";
import Product from "./Product";
import { Row } from "antd";

function Products({ products }) {
  return (
    <Row>
      <Product products={products} />
    </Row>
  );
}

export default Products;
