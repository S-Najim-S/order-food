import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const overlays = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}></Backdrop>,
        overlays
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
