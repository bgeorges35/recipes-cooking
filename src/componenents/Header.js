import React from "react";

import classes from "./Header.module.css";

import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={classes.header}>
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
};

export default Header;
