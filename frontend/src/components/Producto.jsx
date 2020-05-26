import React from "react";
import "./Producto.css";
/*import { CSSTransition } from "react-transition-group";*/

export default function Producto(props) {
  return (
    <div ref={props.myref} className="divproducto">
      <img
        src={require("../assets/IcogramFeatureText.svg")}
        className="topimg"
        alt="topimg"
      />
    </div>
  );
}
