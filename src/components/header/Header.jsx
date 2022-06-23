import React from "react";
import "./Header.css";
import ME from "../../assets/eyob-banner2.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello  </h2>
        <h1> I'M Atakilt Yakob </h1>
        <h4>FullStack Developer </h4>
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
