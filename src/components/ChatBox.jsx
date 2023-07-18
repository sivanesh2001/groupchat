import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const messageEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollTobutton = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollTobutton, [messages]);

  

  useEffect(() => {
    const q = query(collection(db, "messages"),orderBy("createdAt"));
    const un = onSnapshot(q, (querySnapshot) => {
      const orderedMessages = [];
      querySnapshot.forEach((doc) => {
        orderedMessages.push({ ...doc.data(), id: doc.id });
      });
      console.log(orderedMessages);
      setMessages(orderedMessages);
    });
  
    return () => un();
  }, []);
  
 
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatBox;
