import React from "react";
import "./Contacto.css";
/*import { CSSTransition } from "react-transition-group";*/

export default function Contacto(props) {
  return (
    <div ref={props.myref} className="divcontacto">
      <img
        src={require("../assets/Icogram_Contacto.svg")}
        className="imagecontacto"
        alt="imagecontacto"
      />
    </div>
  );
}
