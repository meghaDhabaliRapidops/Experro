import React from "react";
import { Anchor } from "antd";

function Category({ categories }) {
  return (
    <div className="categoryLink">
      <ul className="form-select-sm m-3">
        {categories &&
          categories.map((category) => {
            return (
              <li value={category.name} key={category.name}>
                <a className="content-link" href={`#${category.name}`}>{category.name}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Category;
