import React from "react";

function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        size={4}
        type={type}
        className="input"
        placeholder={placeholder}
        name={label}
      />
    </div>
  );
}

export default Input;
