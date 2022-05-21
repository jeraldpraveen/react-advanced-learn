import React from "react";
import MyPara from "./MyPara";

const Demo = (props) => {
  console.log("DEMO RUNNING");
  return <MyPara>{props.show ? "This is my New Para!" : ""}</MyPara>;
};

export default React.memo(Demo);
