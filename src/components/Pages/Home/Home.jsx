import React from "react";
import Button from "../../Atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Animation/Animation";
const Home = () => {
  const navigate = useNavigate();
  const _handleNavigate = () => {
    navigate("about");
  };
  return (
    <div className="home">
      <AnimatedPage>
        <div className="home__back"></div>
        <div className="home__content">
          <div className="home__image-container">
            <img src={require("../../../Image/avt.jpg")} />
          </div>
          <div className="home__text-container">
            <div className="home__title">
              <div className="">
                <h1 className="color-main">I'm Duy Lam</h1>
                <h1 className="text">Web Developer</h1>
              </div>
            </div>
            <div className="home__present text">
              <span>
                I'm a Vietnamese front‑end developer focused on crafting clean &
                user‑friendly experiences, I am passionate about building
                excellent software that improves the experiences of users. I'm
                also willing to learn new technology and ready to gain benefits
                for not only your company but also myself.
              </span>
            </div>
            <div className="home__button">
              <Button content={"More Information"} onClick={_handleNavigate} />
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Home;
