import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import "../App.css";
import { Link } from "react-router-dom";

const CreateUser = (props) => {
  const handleClick = function (e) {
    const user = createUserWithEmailAndPassword(
      auth,
      props.email,
      props.password
    )
      .then((userCredential) => {
        console.log("succed");
        window.location.href = "/signin";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    props.setEmail("");
    props.setPassword("");
  };

  return (
    <div className="create-user-container">
      <div>
        <h1 className="createUser">CREATE USER</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="email"
          value={props.email}
          onChange={(event) => props.setEmail(event.target.value)}
          className="inputEmail"
          required
        />
        <input
          type="password"
          placeholder="password"
          value={props.password}
          onChange={(event) => props.setPassword(event.target.value)}
          input="inputEmail"
          required
        />
        <button onClick={handleClick}>POTRDI</button>

        <Link to="/signin" className="signInDirection">
          SIGNIN
        </Link>
      </form>
    </div>
  );
};

export default CreateUser;
