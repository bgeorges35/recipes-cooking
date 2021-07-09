import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.path} className={classes[props.class]}>
      {props.value}
    </Link>
  );
};

export default Button;
