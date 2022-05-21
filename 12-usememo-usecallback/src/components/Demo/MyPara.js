import React from "react";

const MyPara = (props) => {
  console.log("MyPara RUNNING");
  return <div>{props.children}</div>;
};

export default MyPara;
