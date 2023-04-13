import React from "react";
import { arrow } from "../assets";
function Button({ onClick, ...otherProps }) {
  return (
    <button className="btn btn-primary" onClick={onClick} {...otherProps}>
      <img src={arrow} alt="calculate duration" />
    </button>
  );
}

export default Button;
