import Duration from "./Duration";
import DateForm from "./DateForm";
import { useState } from "react";

function Card(props) {
  const [duration, setDuration] = useState({});
  return (
    <div className="card">
      <DateForm setDuration={setDuration} />
      <Duration number={duration.years}>years</Duration>
      <Duration number={duration.months}>months</Duration>
      <Duration number={duration.days}>days</Duration>
    </div>
  );
}

export default Card;
