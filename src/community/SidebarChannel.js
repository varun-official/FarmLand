/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import { useEffect, useState } from "react";

import "./SidebarChannel.css";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";

function SidebarChannel({ id, channelName }) {
  const [value, setValue] = useState(false);
  const channelName1 = useSelector(selectChannelName);
  const class1 = "sidebarchannelselect";
  const class2 = "sidebarchannelnotselect";

  const dispatch = useDispatch();

  useEffect(() => {
    if (channelName1 === channelName) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [channelName1]);

  return (
    <div
      className="sidebarchannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4 className={value ? class1 : class2}>
        <span className="sidebarchannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
