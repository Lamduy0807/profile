import React from "react";
import { Icon } from "@iconify/react";

const RoundIcon = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" className="round-icon round-i">
      <Icon className="icon" icon={icon} width="24" height="24" />
    </a>
  );
};

export default RoundIcon;
