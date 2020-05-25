import React from "react";
//import "./App.css";
import MyHeader from "./components/MyHeader";
import ChatCenter from "./components/ChatCenter";
import Producto from "./components/Producto";
import Demo from "./components/Demo";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader />
        <ChatCenter />
        <Producto />
        <Demo />
        <Contacto />
      </header>
    </div>
  );
}

export default App;
