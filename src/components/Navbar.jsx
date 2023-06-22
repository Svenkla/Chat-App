import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import "../App.css";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const odjava = () => {
    signOut(auth);
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <div>
        <h1> Chat app</h1>
        <h3> {auth.currentUser?.email} </h3>
        {auth.currentUser?.email ? (
          <button onClick={odjava} className="signOutButton">
            SignOut
          </button>
        ) : null}
      </div>
    </div>
  );
}
