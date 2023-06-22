import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "../components/CreateUser";
import SignIn from "../components/SignIn";
import "../App.css";
import Chat from "../components/Chat";

const Home = () => {
  const [user] = useAuthState(auth);
  //console.log(user);

  return (
    <div>
      <Navbar />
      <Chat />
    </div>
  );
};

export default Home;
