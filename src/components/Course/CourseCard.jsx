import React from "react";
import courseImage from "../../images/curso.jpg";

const CourseCard = ({ title, description, link }) => {
  return (
    <div className="course">
      <div className="course__image">
        <img src={courseImage} alt="" />
      </div>
      <div className="course__title">
        <h3>{title}</h3>
      </div>
      <div className="course__description">
        <p>{description}</p>
      </div>
      <div className="course__button">
        <a href={`${link}/${title}`}>Comprar</a>
      </div>
    </div>
  );
};

export default CourseCard;
