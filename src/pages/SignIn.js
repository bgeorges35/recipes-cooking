import React, { useState } from "react";

import classes from "./SignIn.module.css";
import Auth from "../componenents/Auth";

import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.sign}>
      <Auth />
      <form className={classes["form"]} onSubmit={submitHandler}>
        <h1>Sign In</h1>
        <input
          placeholder="Username / E-mail"
          type="text"
          onChange={(e) => setUsername(e)}
          value={username.value}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e)}
          value={password.value}
        />
        <div className={classes.btn}>
          <button type="submit">Sign in</button>
          <Link className={classes.links} to="/account/password/reset">
            Forgot password ?
          </Link>
        </div>
        <p className={classes.links}>
          Don't have an account ?{" "}
          <Link className={classes.links} to="/sign-up">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
