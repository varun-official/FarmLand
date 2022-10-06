/** @format */

import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Message.scss";

function Message({ timestamp, message, user, user1 }) {
  return (
    <div
      className={
        user === user1
          ? "chat-bubble chat-bubble--right"
          : "chat-bubble chat-bubble--left"
      }
    >
      <div className="message-logo">
        {" "}
        <Avatar src={user.photo} />
      </div>

      <div className="message__info">
        <div className="message__info_info">
          <div className="message_info-user">{user}</div>
          <p className="message__timestap">
            {new Date(timestamp?.toDate()).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            })}
          </p>
          </div>
       <h4> <p>{message}</p></h4>
      </div>
    </div>
  );
}

export default Message;
