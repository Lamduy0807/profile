import React from "react";

const TextareaCustom = ({ placeholder, handleChange, name }) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      className="text-cus in-bg"
    ></textarea>
  );
};

export default TextareaCustom;
