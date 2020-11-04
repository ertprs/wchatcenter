import React from "react";
import "./MyHeader.css";
/*import { useEffect } from "react";*/
/*import { CSSTransition } from "react-transition-group";*/

export default function MyHeader(props) {
  let handleScrollChatCenter = () => {
    window.scroll({
      left: 0,
      top: props.chatcenterref.current.offsetTop - 90,
      behavior: "smooth",
    });
  };

  let handleScrollProducto = () => {
    window.scroll({
      left: 0,
      top: props.productoref.current.offsetTop - 90,
      behavior: "smooth",
    });
  };

  let handleScrollDemo = () => {
    window.scroll({
      left: 0,
      top: props.demoref.current.offsetTop - 90,
      behavior: "smooth",
    });
  };

  let handleScrollContacto = () => {
    window.scroll({
      left: 0,
      top: props.contactoref.current.offsetTop - 90,
      behavior: "smooth",
    });
  };

  /*
  useEffect(() => {
    console.log("hello world " + props.chatcenterref.current.offsetTop);
  }, []);*/

  return (
    <header className="myheader">
      <h1 className="h1">AppsToGo S.A.S.</h1>
      <nav className="Nav">
        <button className="buttonnav" onClick={handleScrollChatCenter}>
          Inicio
        </button>
        <button className="buttonnav" onClick={handleScrollProducto}>
          Producto
        </button>
        <button className="buttonnav" onClick={handleScrollDemo}>
          Demo
        </button>
        <button className="buttonnav" onClick={handleScrollContacto}>
          Contacto
        </button>
      </nav>
    </header>
  );
}
