import React from "react";
import Button from "./Button";
import Card from "./Card";
import btnClasses from "../UI/Button.module.css";
import modalClasses from "./Modal.module.css";

const Modal = ({ text, closeModal, className }) => {
  return (
    <div className={className}>
      <div className={modalClasses.overlay} />
      <Card className={modalClasses.layer}>
        <p>{text}</p>
        <Button className={btnClasses["close-btn"]} onClick={closeModal}>
          Close
        </Button>
      </Card>
    </div>
  );
};

export default Modal;
