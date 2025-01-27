import React, { useState } from 'react';
import './Availability.css';

const Availability = () => {
  const [currentMonth, setCurrentMonth] = useState('November 2022');
  const appointments = [
    { date: '2022-11-01', time: '10:00am - 11:00am', clinic: 'Clinic 1' },
    { date: '2022-11-01', time: '10:00am - 11:00am', clinic: 'Clinic 2' },
    { date: '2022-11-01', time: '10:00am - 11:00am', clinic: 'Clinic 3' },
    { date: '2022-11-03', time: '10:00am - 11:00am', clinic: 'Clinic 1' },
    { date: '2022-11-07', time: '10:00am - 11:00am', clinic: 'Clinic 2' },
  ];

  const renderCalendar = () => {
    const daysInMonth = 30; // Assume November
    const calendar = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2022-11-${i.toString().padStart(2, '0')}`;
      const dayAppointments = appointments.filter((appt) => appt.date === date);

      calendar.push(
        <div key={i} className="calendar-day">
          <span className="day-number">{i}</span>
          {dayAppointments.map((appt, index) => (
            <div key={index} className="appointment-dot">
              {appt.clinic.slice(-1)} {/* Show clinic number */}
            </div>
          ))}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="availability-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Healthi</h2>
        <ul>
          <li>Dashboard</li>
          <li>Calendar</li>
          <li className="active">Availability</li>
          <li>Profile</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="availability-content">
        <header className="availability-header">
          <h1>My Availability</h1>
          <h2>{currentMonth}</h2>
        </header>

        {/* Calendar */}
        <div className="calendar">
          <div className="calendar-grid">{renderCalendar()}</div>
        </div>

        {/* Upcoming Appointments */}
        <div className="upcoming-appointments">
          <h2>Upcoming</h2>
          <ul>
            {appointments.map((appt, index) => (
              <li key={index} className="upcoming-item">
                <p>{appt.clinic}</p>
                <p>{appt.time}</p>
                <p>{appt.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Availability;
