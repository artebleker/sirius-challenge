import React from "react";
import Logo from "../../image/sirius.png";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="title-logo-container header-container">
      <h1 className="title">
        <Link to={"/"}>Rick and Morty characters</Link>
      </h1>
      <a href="https://sirius.com.ar/" alt="Sirius" target="blank">
        <img src={Logo} alt="Sirius" className="logo" />
      </a>
    </div>
  );
};

export default Header;
