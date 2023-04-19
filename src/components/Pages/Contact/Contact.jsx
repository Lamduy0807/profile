import React from "react";
import Tittle from "../../Atoms/Title/Tittle";
import Header from "../../Atoms/Header/Header";
import ContactCard from "../../Atoms/ContactCard/ContactCard";
import { CONTACT, LINK } from "../../Const/const";
import RoundIcon from "../../Atoms/RoundIcon/RoundIcon";
import Button from "../../Atoms/Button/Button";
import InputCustom from "../../Atoms/InputCustom/InputCustom";
import TextareaCustom from "../../Atoms/TextareaCustom/TextareaCustom";
import AnimatedPage from "../Animation/Animation";
const Contact = () => {
  return (
    <div className="contact">
      <Tittle main="Get in" highlight="touch" behind="contact" />
      <AnimatedPage>
        <div className="grid wide">
          <div style={{ boxSizing: "border-box" }} className="row">
            <div className="contact__infor col l-4 m-12 c-12">
              <Header content={"Feel free to contact"} />
              <p className="contact__para text">
                Feel free to keep in touch with me. I am open to discuss new
                projects, creative ideas or oppoturnities to be part of your
                vision.
              </p>
              {CONTACT.map((item, index) => {
                return (
                  <ContactCard
                    key={index}
                    svg={item.svg}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
              <div style={{ display: "flex" }}>
                {LINK.map((item, index) => {
                  return (
                    <RoundIcon key={index} icon={item.icon} href={item.href} />
                  );
                })}
              </div>
            </div>

            <div className="contact__form col l-8 m-12 c-12">
              <div className="row">
                <div className="col l-6 m-6 c-12">
                  <InputCustom placeholder={"Your name"} />
                </div>
                <div className="col l-6 m-6 c-12">
                  <InputCustom placeholder={"Your email"} />
                </div>
                <div className="col l-12 m-12 c-12">
                  <InputCustom placeholder={"Your subject"} />
                </div>
                <div className="col l-12 m-12 c-12">
                  <TextareaCustom placeholder={"Your message"} />
                </div>
                <div className="col l-12 m-12 c-12">
                  <Button content={"send message"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Contact;
