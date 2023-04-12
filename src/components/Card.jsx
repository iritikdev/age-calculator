import React from "react";
import Input from "./Input";
import Duration from "./Duration";
import Button from "./Button";
import Divider from "./Divider";
function Card(props) {
  return (
    <div className="card">
      <div className="input-container">
        <Input placeholder="DD" label="day" />
        <Input placeholder="MM" label="month" />
        <Input placeholder="YY" label="year" />
      </div>
      <Divider />
      <Duration number={38}>years</Duration>
      <Duration number={5}>months</Duration>
      <Duration number={26}>days</Duration>
    </div>
  );
}

export default Card;
