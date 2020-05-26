import React, { useRef } from "react";
//import "./App.css";
import MyHeader from "./components/MyHeader";
import ChatCenter from "./components/ChatCenter";
import Producto from "./components/Producto";
import Demo from "./components/Demo";
import Contacto from "./components/Contacto";

function App() {
  const chatcenterref = useRef();
  const productoref = useRef();
  const demoref = useRef();
  const contactoref = useRef();
  /*
  const chatcenterref = "useRef1()";
  const productoref = "useRef(2)";
  const demoref = "useRef3()";
  const contactoref = "useRef4()";
    */

  return (
    <div className="App">
      <header className="App-header">
        <MyHeader
          chatcenterref={chatcenterref}
          productoref={productoref}
          demoref={demoref}
          contactoref={contactoref}
        />
        <ChatCenter myref={chatcenterref} />
        <Producto myref={productoref} />
        <Demo myref={demoref} />
        <Contacto myref={contactoref} />
      </header>
    </div>
  );
}

export default App;
