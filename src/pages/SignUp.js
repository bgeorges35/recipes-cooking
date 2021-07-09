import React, { useEffect, useState } from "react";

import classes from "./SignUp.module.css";
import Auth from "../componenents/Auth";

import { Link } from "react-router-dom";

const SignUp = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={classes.sign}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e)}
          value={username.value}
        />
        <input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e)}
          value={email.value}
        />
        <input
          placeholder="Confirm E-mail"
          type="text"
          onChange={(e) => setConfirmEmail(e)}
          value={confirmEmail.value}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e)}
          value={password.value}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPassword(e)}
          value={confirmPassword.value}
        />
        <div className={classes.btn}>
          <button type="submit">Sign up</button>
        </div>
        <p className={classes.links}>
          Already register ? <Link to="/get-started">Register</Link>
        </p>
      </form>
      <Auth />
    </div>
  );
};

export default SignUp;
