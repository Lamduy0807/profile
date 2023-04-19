import React from "react";

const Timeline = ({ time, title, location, para }) => {
  return (
    <div className="timeline">
      <div className="timeline__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16Z"
          />
        </svg>
      </div>
      <span className="timeline__time text chart-bg">{time}</span>
      <h5 className="timeline__title text">
        {title}
        <span className="timeline__title__location dash">{location}</span>
      </h5>
      <p className="timeline__paragraph text">{para}</p>
    </div>
  );
};

export default Timeline;
