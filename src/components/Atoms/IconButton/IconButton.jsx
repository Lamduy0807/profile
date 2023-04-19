import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const IconButton = ({ content, icon, link }) => {
  return (
    <NavLink to={link} className={"icon-button toggle-bg"}>
      <div className="icon-button__round text-in text">
        <Icon icon={icon} width="24" height="24" />
      </div>
      <div className="icon-button__content">{content}</div>
    </NavLink>
  );
};

export default IconButton;
