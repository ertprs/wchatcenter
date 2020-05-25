import React from "react";
import "./ChatCenter.css";

export default function ChatCenter() {
  return (
    <div id="chatcenter" className="divchatcenter">
      <img
        src={require("../assets/Icogram_WChatCenter.svg")}
        className="imagechatcenter"
        alt="imagechatcenter"
      />
    </div>
  );
}
