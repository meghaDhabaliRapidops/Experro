import React from "react";

function Product({ products }) {
  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <div key={product.name}>
              <img
                src={product.url}
                alt={product.name}
                width="100px"
                height="100px"
              />
              <p>{product.name}</p>
            </div>
          );
        })}
    </>
  );
}

export default Product;
