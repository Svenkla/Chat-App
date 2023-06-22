import React, { useState } from "react";
import "../App.css";
import { auth } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const handleClick = function (e) {
    const user = signInWithEmailAndPassword(
      auth,
      props.signEmail,
      props.signPassword
    )
      .then((userCredential) => {
        console.log("signed in");
        window.location.href = "/chat";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    props.setSignEmail("");
    props.setSignPassword("");
  };

  return (
    <div className="create-user-container">
      <div>
        <h1 className="createUser">SIGN IN</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="email"
          value={props.signEmail}
          onChange={(event) => props.setSignEmail(event.target.value)}
          className="inputEmail"
          required
        />
        <input
          type="password"
          placeholder="password"
          value={props.signPassword}
          onChange={(event) => props.setSignPassword(event.target.value)}
          required
        />
        <button onClick={handleClick} className="buttonPotrdi">
          POTRDI
        </button>
      </form>
    </div>
  );
};

export default SignIn;
