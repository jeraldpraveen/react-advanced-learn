import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

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

  const changeTitleHandler = () => {
    setListTitle("New Title");
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={togleParaHandler}>Show Para !</Button>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
