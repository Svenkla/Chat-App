import React from "react";
import { auth } from "../config/firebase";

const user = auth.currentUser;

const Message = ({ message }) => {
  return (
    <div>
      <div className="message">
        <p className="name">{message.email}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
