import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const togleParaHandler = useCallback(() => {
    if (allowToggle) {
      if (!showPara) {
        setShowPara(true);
      } else {
        setShowPara(false);
      }
    }
  }, [allowToggle, showPara]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={togleParaHandler}>Show Para !</Button>
    </div>
  );
}

export default App;
