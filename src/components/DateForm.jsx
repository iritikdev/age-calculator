import React, { useState } from "react";

import Button from "./Button";
import getDateDifference from "../utils/getDateDifference";

function DateForm({ setDuration }) {
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState();

  const validate = () => {
    const currentErrors = {};
    const { day, month, year } = date;
    if (day.trim() === "") currentErrors.day = "Day is required.";
    if (month.trim() === "") currentErrors.month = "Month is required";
    if (year.trim() === "") currentErrors.year = "Year is required";

    if (day.trim() !== "" && parseInt(day) > 31)
      currentErrors.day = "Must be valid day";
    if ((month.trim() !== "" && parseInt(month) < 1) || parseInt(month) > 12)
      currentErrors.month = "Must be valid month";
    if (year.trim() !== "" && parseInt(year) < 1600)
      currentErrors.year = "Must be valid year";
    return Object.keys(currentErrors).length === 0 ? null : currentErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentErrors = validate();
    setErrors(currentErrors);
    if (currentErrors) return;

    setDuration(getDateDifference(date));
  };

  const validateProperty = ({ name, value }) => {
    // input : value, name
    if (name == "day") {
      if (value.trim() === "") return "Date is required.";
      if (value.trim() !== "" && parseInt(value) > 31)
        return "Must be valid day";
    }
    if (name == "month") {
      if (value.trim() === "") return "Month is required.";
      if ((value.trim() !== "" && parseInt(value) < 1) || parseInt(value) > 12)
        return "Must be valid month";
    }
    if (name == "year") {
      if (value.trim() === "") return "Year is required.";
      if (value.trim() !== "" && parseInt(value) < 1600)
        return "Must be valid year";
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const currentErrors = { ...errors };
    const errorMessage = validateProperty(input);

    if (errorMessage) currentErrors[input.name] = errorMessage;
    else delete currentErrors[input.name];

    const currentDate = { ...date };
    currentDate[input.name] = input.value;

    setDate(currentDate);
    setErrors(currentErrors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-group">
          <label htmlFor={"day"} className="label">
            day
          </label>
          <input
            name="day"
            onChange={handleChange}
            placeholder="DD"
            type="text"
            value={date.day}
          />
          {errors && <p className="error">{errors.day}</p>}
        </div>
        <div className="input-group">
          <label htmlFor={"month"} className="label">
            month
          </label>
          <input
            name="month"
            onChange={handleChange}
            placeholder={"MM"}
            type="text"
            value={date.month}
          />
          {errors && <p className="error">{errors.month}</p>}
        </div>
        <div className="input-group">
          <label htmlFor={"day"} className="label">
            year
          </label>
          <input
            name="year"
            type="text"
            placeholder={"YY"}
            value={date.year}
            onChange={handleChange}
          />
          {errors && <p className="error">{errors.year}</p>}
        </div>
      </div>
      <div className="divider">
        <hr />
        {/* onClick={() => setDuration({ name: "Ritik" })} */}
        <Button />
      </div>
    </form>
  );
}

export default DateForm;
