import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import btnClasses from "../UI/Button.module.css";
import modalClasses from "./Modal.module.css";

const Modal = (props) => {
  const BackDrop = ({ closeModal }) => {
    return <div className={modalClasses.overlay} onClick={closeModal} />;
  };

  const DisplayModal = ({ title, text, closeModal }) => {
    return (
      <Card className={modalClasses.layer}>
        <h2 className={modalClasses.header}>{title}</h2>
        <p className={modalClasses.text}>{text}</p>
        <Button className={btnClasses["close-btn"]} onClick={closeModal}>
          Close
        </Button>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop {...props} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DisplayModal {...props} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
