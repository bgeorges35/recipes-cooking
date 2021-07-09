import React from "react";

import classes from "./NavLink.module.css";

const NavLink = () => {
  return (
    <div className={classes["nav-link"]}>
      <a href="/">Home</a>
      <a href="About">About</a>
      <a href="Recipes">Recipes</a>
      <a href="Download">Download</a>
      <a href="Contact">Contact</a>
    </div>
  );
};

export default NavLink;
