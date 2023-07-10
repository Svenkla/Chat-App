import { useState } from "react";
import React from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [sendMessage, setSendMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const { email } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: sendMessage,
      email: email,
      timestamp: serverTimestamp(),
    });
    setSendMessage("");
  };

  return (
    <div>
      {auth.currentUser?.email ? (
        <form className="sendMessage" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="message"
            className="input"
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            required
          />
          <button type="submit" className="send">
            Send
          </button>
        </form>
      ) : (
        <p className="alert">IF YOU WANT TO WRITE SOMETHING... SIGN IN</p>
      )}
    </div>
  );
};

export default SendMessage;
