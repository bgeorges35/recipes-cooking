import React from "react";

import classes from "./NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <label>
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input placeholder="Search here..."></input>
    </div>
  );
};

export default NavBar;
