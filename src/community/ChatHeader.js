import React from 'react'
import "./ChatHeader.css";
function ChatHeader({ channelName }) {
  return (
    <div className="chatheder">
        <h3>
          <span className="chatheder__hash">#</span>
          <span className='channel'>{channelName}</span>
        </h3>
      </div>

  );
}

export default ChatHeader
