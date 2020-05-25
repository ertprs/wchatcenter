import React from "react";
import "./Contacto.css";
/*import { CSSTransition } from "react-transition-group";*/

export default function Contacto() {
  return (
    <div id="contacto" className="divcontacto">
      <img
        src={require("../assets/Icogram_Contacto.svg")}
        className="imagecontacto"
        alt="imagecontacto"
      />
    </div>
  );
}
