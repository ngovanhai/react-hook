import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./component/ColorBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to react hook</h1>
        <ColorBox />
      </header>
    </div>
  );
}

export default App;
