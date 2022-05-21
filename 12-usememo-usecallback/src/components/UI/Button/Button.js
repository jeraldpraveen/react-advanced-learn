import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("BUTTON RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// In Browser Console ---> Check React.memo is not working
// WHY IS THAT ? --> Works For Demo & DoesNOT work for BUTTON
// This is because of Premitive And Reference Types
// In Browser Console ====> Type [[ false === false ]] ===> You get true
// In Browser Console ====> Type [[ [1,2,3] === [1,2,3] ]] ===> You get false
export default React.memo(Button);
