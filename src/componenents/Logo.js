import React from "react";

import classes from "./Logo.module.css";
import logo from "../assets/logo-min.png";

const Logo = () => {
  const homeHandler = () => {
    return;
  };

  return (
    <>
      <img
        className={classes.logo}
        src={logo}
        alt="Logo"
        onClick={homeHandler}
      />
    </>
  );
};

export default Logo;
