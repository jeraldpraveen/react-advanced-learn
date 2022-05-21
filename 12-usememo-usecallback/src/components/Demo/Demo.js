import React from "react";

const Demo = (props) => {
  console.log("DEMO RUNNING");
  return <p>{props.show ? "This is my New Para!" : ""}</p>;
};

export default Demo;
