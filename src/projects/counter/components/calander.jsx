import { useState, useEffect } from 'react';
import './calander.css';

function Calander() {
  const totalDays = 100;
  const startDate = new Date('2024-05-22'); // Set this to your start date
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    const todayDate = new Date();
    // Ensure startDate and todayDate are correct
    console.log('Start Date:', startDate);
    console.log('Today Date:', todayDate);
    
    // Calculate the number of days elapsed since the start date
    const elapsedDays = Math.floor((todayDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    console.log('Elapsed Days:', elapsedDays); // Debugging
    setCurrentDay(elapsedDays);
  }, []); // Empty dependency array to run only once

  const getDayClassName = (day) => {
    if (day > currentDay) return 'crossed';
    if (day === currentDay) return 'current-day';
    return '';
  };

  return (
    <div className="calendar">
      {Array.from({ length: totalDays }, (_, index) => {
        const day = index + 1;
        return (
          <div
            key={day}
            className={`day-box ${getDayClassName(day)}`}
          >
            {day === 1 && <span className="crown">👑</span>}
            
            {day ===1 ?<></>:<span className="day-number">{day}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Calander;
