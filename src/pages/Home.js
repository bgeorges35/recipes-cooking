import React from "react";
import { Switch, Link } from "react-router-dom";

import Image from "../componenents/Image";
import NavBar from "../componenents/NavBar";
import Button from "../componenents/Button";

import classes from "./Home.module.css";

const Home = () => {
  const exploreMenuHandler = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <>
      <NavBar />
      <div className={classes.home}>
        <div className={classes.text}>
          <p className={classes.title}>
            Let's Start Cooking With Popular Recipes
          </p>
          <p className={classes.sentence}>
            Want to learn cook but confused how to start ?
          </p>
          <p className={classes.sentence}>No need to worry again</p>
          <div className={classes.buttons}>
            <Button value="Get Started" class="btn1" path="get-started" />
            <Button value="Explore Menu" class="btn2" path="explore-menu" />
          </div>
        </div>
        <div>
          <Image />
        </div>
      </div>
    </>
  );
};

export default Home;
