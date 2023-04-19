import React from "react";

const ExperienceCard = ({ number, content, content1 }) => {
  return (
    <div className="ex-card">
      <div className="ex-card__container">
        <div className="ex-card__number-container">
          <div className="ex-card__number">{number}</div>
          <div className="ex-card__plus">+</div>
        </div>
        <div className="ex-card__content text">
          <div>
            <h2>{content}</h2>
            <h2>{content1}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
