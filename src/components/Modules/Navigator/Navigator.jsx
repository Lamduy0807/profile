import React from "react";
import IconButton from "../../Atoms/IconButton/IconButton";

const Navigator = () => {
  return (
    <div id="nav" className="navi navi-bg">
      <IconButton content={"home"} icon={"material-symbols:home"} link={""} />
      <IconButton content={"About"} icon={"mdi:about"} link={"about"} />
      <IconButton
        content={"contact"}
        icon={"mdi:message-group"}
        link={"\contact"}
      />
    </div>
  );
};

export default Navigator;
