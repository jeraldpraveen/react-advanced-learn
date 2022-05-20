import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    //<div onClick> handles click on Backdrop
    //<Button onClick> handles click on Button
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card cssClass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OKay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
