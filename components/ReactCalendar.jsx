import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  const handleClick = (date) => {
    const newDate = new Date(date);
    onChange(newDate);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ReactCalendar;