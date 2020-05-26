import React from "react";
import "./Demo.css";

export default function Demo(props) {
  const imageWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=14155238886&text=join%20snake-public"
    );
  };

  return (
    <div ref={props.myref} className="divdemo">
      <div className="divwhatsapp">
        <br />
        <h1 className="h1color"> Realice Click sobre el icono de WhatsApp</h1>
        <br />
        <img
          src={require("../assets/WhatsApp_Logo_8.png")}
          className="imagewhatsapp"
          alt="imagewhatsapp"
          onClick={() => imageWhatsAppClick()}
        />
        <h1 className="h1color">o escanee el codigo QR.</h1>
      </div>
      <div className="divwhatsappqr">
        <img
          src={require("../assets/ChatCenterQR.png")}
          className="imagewhatsapp"
          alt="imagewhatsapp"
        />
      </div>
    </div>
  );
}
