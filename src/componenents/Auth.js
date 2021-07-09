import React from "react";

import classes from "./Auth.module.css";

import img from "../assets/cover.jpeg";

const Auth = () => {
  return (
    <div className={classes["img-get-start"]}>
      <h3>
        “If something stands between you and your success, move it. Never be
        denied.”
      </h3>
      <img src={img} />
    </div>
  );
};

export default Auth;
