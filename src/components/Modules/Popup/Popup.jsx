import React from "react";
import { Icon } from "@iconify/react";
const Popup = ({ isOpen, setOpen, isSuccess }) => {
  const pop = true;
  return isOpen ? (
    <div className="popup">
      <div className="popup__container">
        <button onClick={setOpen} className="popup__btn">
          <Icon color="white" icon="material-symbols:close" />
        </button>
        <div className="popup__content">
          <Icon
            icon={isSuccess ? "mdi:smiley-wink" : "ph:smiley-sad-fill"}
            color="#da9900"
          />
          <span>
            {isSuccess
              ? "Successfully sent! Thanks for your passionate"
              : "Sorry, something wrong occured!"}
          </span>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
