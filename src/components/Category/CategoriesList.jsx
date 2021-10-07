import React from "react";

const CategoriesList = ({ categoriesList }) => {
  return (
    <ul className="categories__list">
      {categoriesList.map((category) => {
        return (
          <li key={category.id}>
            <i className={`icon ${category.icon}`}></i>
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
