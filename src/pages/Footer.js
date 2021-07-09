import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <span>
        Made with <FontAwesomeIcon className={classes.fa} icon={faHeart} /> by
        <a> Benoit Georges</a>
      </span>
    </div>
  );
};

export default Footer;
