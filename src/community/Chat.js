/** @format */

import React, { useEffect, useState, useRef } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import firebase from "firebase/compat/app";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { v4 } from "uuid";
import { useUserAuth } from "../context/UserAuthContext";
import Picker from "emoji-picker-react";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const { user } = useUserAuth();
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const channelCollectionRef = collection(db, "Channel list");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const onEmojiClick = (event, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    if (channelId) {
      const ref = doc(db, "Channel list", channelId);
      const ref1 = query(collection(ref, "message"), orderBy("timestamp"));
      const unsub = onSnapshot(ref1, (doc) => {
        setMessages(doc.docs.map((document) => document.data()));
      });
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [channelId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    if(input.length<1) return null
    e.preventDefault();
    const ref = doc(db, "Channel list", channelId);
    const ref1 = collection(ref, "message");
    console.log(channelId);
    addDoc(ref1, {
      timestamp: serverTimestamp(),
      message: input,
      user: user.user_name,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
            user1={user.user_name}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat__input">
        <div className="input">
          {" "}
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
        </div>
        <div className="chat_input-emoji">
          <img
            className="emoji-icon"
            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
            alt=""
            onClick={() => setShowPicker((val) => !val)}
          />
          <div>
            {showPicker && (
              <Picker
                pickerStyle={{ width: "100%" }}
                onEmojiClick={onEmojiClick}
                showPreview={false}
                showSkinTones={false}
              />
            )}
          </div>
        </div>
        <button
          className="chat__inputButton"
          onClick={sendMessage}
          type="submit"
        >
          <SendIcon style={{}} />
        </button>
      </div>
    </div>
  );
}

export default Chat;
