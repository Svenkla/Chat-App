import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../config/firebase";
import Message from "./Message";
import { QuerySnapshot, onSnapshot, orderBy } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { query } from "firebase/firestore";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const getMessages = async () => {
    try {
      const colRef = collection(db, "messages");
      const q = query(colRef, orderBy("timestamp", sortOrder));

      onSnapshot(q, (snapshot) => {
        const x = [];
        snapshot.docs.forEach((doc) => {
          x.push(doc.data());
        });
        setMessages(x);
      });
    } catch (error) {
      console.error("Napaka pri pridobivanju podatkov:", error);
    }
  };

  useEffect(() => {
    getMessages();
    const intervalId = setInterval(getMessages, 1);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage />
    </>
  );
};

export default Chat;
