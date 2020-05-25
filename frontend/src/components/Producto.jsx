import React from "react";
import "./Producto.css";
/*import { CSSTransition } from "react-transition-group";*/

export default function Producto() {
  return (
    <div id="producto" className="divproducto">
      <img
        src={require("../assets/IcogramFeatureText.svg")}
        className="topimg"
        alt="topimg"
      />
    </div>
  );
}
