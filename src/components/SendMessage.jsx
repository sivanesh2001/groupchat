import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import ChatBox from "./ChatBox";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSentMessage = async (e) => {
    e.preventDefault();
  
    try {
      const { uid, displayName } = currentUser;
      const { photoUrl } =currentUser.reloadUserInfo; // Destructure photoUrl from reloadUserInfo
  
      await addDoc(collection(db, "messages"), {
        text: value, 
        name: displayName,
        avatar: photoUrl, // Use photoUrl from reloadUserInfo
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
  
    setValue(""); 
  };
  

  return (
    <div className="bg-gray-300 fixed bottom-0 w-full py-5 shadow-lg">
      <form onSubmit={handleSentMessage} className="containerWrap flex px-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-3"
          type="text"
        />
        {value.trim() === "" ? (
          <button type="submit" className="btn btn-neutral">
            Send
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default SendMessage;
