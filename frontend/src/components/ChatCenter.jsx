import React from "react";
import "./ChatCenter.css";

export default function ChatCenter(props) {
  return (
    <div ref={props.myref} className="divchatcenter">
      <img
        src={require("../assets/Icogram_WChatCenter.svg")}
        className="imagechatcenter"
        alt="imagechatcenter"
      />
    </div>
  );
}
