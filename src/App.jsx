import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./components/CreateUser";
import SignIn from "./components/SignIn";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");

  return (
    <Router>
      <Routes>
        <Route exact path="/chat" element={<Home />} />
        <Route
          exact
          path="/"
          element={
            <CreateUser
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <SignIn
              signEmail={signEmail}
              setSignEmail={setSignEmail}
              signPassword={signPassword}
              setSignPassword={setSignPassword}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
