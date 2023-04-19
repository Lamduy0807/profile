import React from "react";

const Tittle = ({main, highlight, behind}) => {
  return (
    <div className="title">
      <h1 className="title__main text">
        {main}
        <span> {highlight}</span>
      </h1>
      <span className="title__behind title-behind">{behind}</span>
    </div>
  );
};

export default Tittle;
