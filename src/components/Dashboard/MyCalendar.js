import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Include default styles


const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div style={{height: '80%' }}>
      <h3 style={{fontSize : '18px' , fontWeight: 500 ,marginTop:'50px' }}> Calendar</h3>
      <Calendar onChange={onChange} value={date} />
      <p style={{ alignItems: 'center' , fontSize:'12px' }}> {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
