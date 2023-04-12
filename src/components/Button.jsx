import React from "react";
import { arrow } from "../assets";
function Button({ onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      <img src={arrow} alt="calculate duration" />
    </button>
  );
}

export default Button;
