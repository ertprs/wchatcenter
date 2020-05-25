import React from "react";
import "./Demo.css";

export default function Demo() {
  return (
    <div id="demo" className="divdemo">
      <img
        src={require("../assets/Icogram_WChatCenter.svg")}
        className="imagedemo"
        alt="imagedemo"
      />
    </div>
  );
}
