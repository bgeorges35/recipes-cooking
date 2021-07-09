import React from "react";

import classes from "./Image.module.css";

import ImgRecipe from "../assets/home.png";

const Image = () => {
  return (
    <>
      <img className={classes.img} src={ImgRecipe}></img>
    </>
  );
};

export default Image;
