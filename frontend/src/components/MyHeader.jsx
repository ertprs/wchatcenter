import React from "react";
import "./MyHeader.css";
/*import { CSSTransition } from "react-transition-group";*/

export default function MyHeader() {
  const ButoonClick = (elementid) => {
    var ele = document.getElementById(elementid);
    window.scrollTo(ele.offsetLeft, ele.offsetTop - 90);
  };
  /*
  const ChatCenterClick = () => {
    var ele = document.getElementById("chatcenter");
    window.scrollTo(ele.offsetLeft, ele.offsetTop - 90);
  };

  const ProductoClick = () => {
    var ele = document.getElementById("producto");
    window.scrollTo(ele.offsetLeft, ele.offsetTop - 90);
  };
*/
  return (
    <header className="myheader">
      <h1 className="h1">ChatCenter</h1>
      <nav className="Nav">
        <button className="buttonnav" onClick={() => ButoonClick("chatcenter")}>
          Inicio
        </button>
        <button className="buttonnav" onClick={() => ButoonClick("producto")}>
          Producto
        </button>
        <button className="buttonnav" onClick={() => ButoonClick("demo")}>
          Demo
        </button>
        <button className="buttonnav" onClick={() => ButoonClick("contacto")}>
          Contacto
        </button>
      </nav>
    </header>
  );
}
