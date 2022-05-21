import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("APP RUNNING");

  const togleParaHandler = () => {
    if (!showPara) setShowPara(true);
    else setShowPara(false);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={togleParaHandler}>Show Para !</Button>
    </div>
  );
}

export default App;
