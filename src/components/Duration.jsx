import React from "react";

function Duration({ children, number }) {
  return (
    <h1 className="duration">
      <span>{number ? number : "--"}</span>
      {children}
    </h1>
  );
}

export default Duration;
