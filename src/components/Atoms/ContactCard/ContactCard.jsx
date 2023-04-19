import React from "react";
const ContactCard = ({ svg, title, content }) => {
    
  return (
    <div className="contact-card">
      <div className="contact-card__icon">{svg}</div>

      <h3 className="contact-card__title text">{title}</h3>
      <p className="contact-card__para text">{content}</p>
    </div>
  );
};

export default ContactCard;
