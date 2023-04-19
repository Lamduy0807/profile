import Home from "./components/Pages/Home/Home";
import ToggleDarkLight from "./components/Atoms/ToggleDarkLight/ToggleDarkLight";
import { useState } from "react";
import ExperienceCard from "./components/Atoms/ExperienceCard/ExperienceCard";
import PersonInfor from "./components/Atoms/PersonInfor/PersonInfor";
import BarChart from "./components/Atoms/BarChart/BarChart";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Navigator from "./components/Modules/Navigator/Navigator";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedPage from "./components/Pages/Animation/Animation";
function App() {
  const [active, setActive] = useState(true);
  const location = useLocation();

  const _handleChangeActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div style={{ height: "auto" }} className={active ? "light" : "dark"}>
      <ToggleDarkLight
        active={active}
        handleChangeActive={_handleChangeActive}
      />
      <AnimatedPage exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatedPage>
      <Navigator />
    </div>
  );
}

export default App;
