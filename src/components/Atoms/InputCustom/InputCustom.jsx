import React from "react";

const InputCustom = ({ placeholder, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder={placeholder}
      className="in-cus in-bg"
    ></input>
  );
};

export default InputCustom;
