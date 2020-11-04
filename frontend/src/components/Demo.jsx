import React from "react";
import "./Demo.css";

export default function Demo(props) {
  const imageWhatsAppClick = () => {
    window.open(
      //"https://api.whatsapp.com/send?phone=14155238886&text=join%20snake-public"
      "https://signupforservices.com/whatsapp/optin/?bId=9844238c-092b-49fe-895a-432830cd64b6&bName=ChatCenter&s=URL&lang=es"
    );
  };

  return (
    <div ref={props.myref} className="divdemo">
      <div className="divwhatsapp">
        <h1 className="h1color"> Realice Click sobre el icono</h1>
        <img
          background
          src={require("../assets/optin.png")}
          className="imagewhatsapp"
          alt="imagewhatsapp"
          onClick={() => imageWhatsAppClick()}
        />
        <h1 className="h1color">o escanee el codigo QR.</h1>
      </div>
      <div className="divwhatsappqr">
        <img
          src={require("../assets/optinqr.png")}
          className="imagewhatsappqr"
          alt="imagewhatsappqr"
        />
      </div>
    </div>
  );
}
