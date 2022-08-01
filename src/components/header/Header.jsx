import React from "react";
import "./Header.css";
import ME from "../../assets/eyob-banner2.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello, I'M </h2>
        <h1>  Atakilt Yakob </h1>
        <h3><b>FullStack Web Developer &</b> <br>
        </br><b>Electrical Engineer</b></h3>

        <CTA /> <br></br>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
