import React from "react";

const TextareaCustom = ({ placeholder, handleChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={handleChange}
      className="text-cus in-bg"
    ></textarea>
  );
};

export default TextareaCustom;
