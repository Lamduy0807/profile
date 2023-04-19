import React from "react";

const PersonInfor = ({ title, infor }) => {
  return (
    <div className="person-infor text">
      <div className="person-infor__title">{title + " :"}</div>
      <div className="person-infor__content">{infor}</div>
    </div>
  );
};

export default PersonInfor;
