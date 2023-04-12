import React from "react";
import Button from "./Button";

function Divider(props) {
  return (
    <div className="divider">
      <hr />
      <Button onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Divider;
