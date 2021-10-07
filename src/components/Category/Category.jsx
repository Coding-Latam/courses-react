import React from "react";

const Category = ({ name, icon }) => {
  return (
    <li>
      <i className={`icon icon-${icon}`}></i>
      {name}
    </li>
  );
};

export default Category;
