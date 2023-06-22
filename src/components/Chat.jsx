import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../config/firebase";
import Message from "./Message";
import { QuerySnapshot, onSnapshot, orderBy } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { query } from "firebase/firestore";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  const getMessages = async () => {
    await getDocs(collection(db, "messages")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(newData);
    });
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
