import React from "react";

const InputCustom = ({ placeholder, handleChange, type, name }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className="in-cus in-bg"
    ></input>
  );
};

export default InputCustom;
