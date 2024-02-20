import React from "react";
import BarChart from "../../Atoms/BarChart/BarChart";
import Button from "../../Atoms/Button/Button";
import ExperienceCard from "../../Atoms/ExperienceCard/ExperienceCard";
import Header from "../../Atoms/Header/Header";
import PersonInfor from "../../Atoms/PersonInfor/PersonInfor";
import Timeline from "../../Atoms/Timeline/Timeline";
import Tittle from "../../Atoms/Title/Tittle";
import { saveAs } from "file-saver";
import AnimatedPage from "../Animation/Animation";
import { INFOR, SKILLS, TIMELINES } from "../../Const/const";

const About = () => {
  const _handleDownload = () => {
    saveAs(`${window.location.origin}/lam-nguyen-buu-duy-software-dev.pdf`, "lam-nguyen-buu-duy-software-dev.pdf");
  };
  return (
    <div className="about">
      <Tittle main="About" highlight="me" behind="Resume" />
      <AnimatedPage>
        <div className="grid wide">
          <Header content={"Personal Infors"} />
          <div class="row">
            <div class="col l-6 m-6 c-12">
              <div className="about__basic">
                {INFOR.map((item, index) => {
                  return (
                    <div key={index} className="about__basic__col">
                      <PersonInfor title={item.title} infor={item.infor} />
                    </div>
                  );
                })}
                <div className="about__card-container">
                  <Button onClick={_handleDownload} content={"Download CV"} />
                </div>
              </div>
            </div>
            <div class="col l-6 m-6 c-12">
              <div className="about__basic about__card-container">
                <div className="about__basic__col about__basic__spc">
                  <ExperienceCard
                    number={11}
                    content={"months of"}
                    content1={"experiences"}
                  />
                </div>
                <div className="about__basic__col">
                  <ExperienceCard
                    number={10}
                    content={"completed"}
                    content1={"projects"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
      <hr className="about__seperator hr"></hr>
      <AnimatedPage>
        <div className="grid wide">
          <Header content={"Skills"} />
          <div class="row">
            {SKILLS.map((item, index) => {
              return (
                <div
                  style={{ marginBottom: "20px" }}
                  key={index}
                  className="col l-3 m-6 c-6"
                >
                  <BarChart percent={item.percent} content={item.content} />
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedPage>
      <hr className="about__seperator hr"></hr>
      <AnimatedPage>
        <div className="grid wide">
          <Header content={"Education & experiences"} />
          <div class="row">
            {TIMELINES.map((item, index) => {
              return (
                <div key={index} className="col l-6 m-6 c-12">
                  <Timeline
                    time={item.time}
                    title={item.title}
                    location={item.location}
                    para={item.para}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default About;
