import React, { useState } from "react";

function Input({ label, placeholder, type = "text", ...otherProps }) {
  return (
    <div>
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        {...otherProps}
        size={4}
        type={type}
        className="input"
        placeholder={placeholder}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
