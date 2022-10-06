/** @format */

import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth, db } from "../config/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
} from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";
import { v4 } from "uuid";

function Sidebar() {
  const { user } = useUserAuth();
  const channelCollectionRef = collection(db, "Channel list");
  const [channles, setChannles] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(channelCollectionRef, (doc) => {
      setChannles(
        doc.docs.map((document) => ({
          id: document.id,
          channel: document.data(),
        }))
      );
    });
  }, []);
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      addDoc(channelCollectionRef, { channelName: channelName });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Community</h3>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeder">
          <div className="sidebar__header">
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channles.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar__profile">
        <div className="sidebar__profileInfo">
          <h3>{user.user_name}</h3>
          <p>#{v4().substring(0, 6)}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
