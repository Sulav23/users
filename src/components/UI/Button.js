import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
