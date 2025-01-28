import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [tab, setTab] = useState('upcoming'); // Tabs: 'upcoming', 'past', 'cancelled'
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  const bookings = {
    upcoming: [
      { id: 1, date: 'Thu, 15', time: '09:00am - 09:30am', issue: 'Fever', doctor: 'Stephine Claire', documents: true },
      { id: 2, date: 'Fri, 16', time: '09:00am - 09:30am', issue: 'Fever', doctor: 'Stephine Claire', documents: true },
    ],
    past: [
      { id: 3, date: 'Wed, 12', time: '10:00am - 10:30am', issue: 'Headache', doctor: 'John Doe', documents: false },
    ],
    cancelled: [
      { id: 4, date: 'Tue, 11', time: '11:00am - 11:30am', issue: 'Cold', doctor: 'Jane Smith', documents: true },
    ],
  };

  useEffect(() => {
    // Generate months dynamically based on current date
    const now = new Date();
    const currentMonthIndex = now.getMonth();
    const year = now.getFullYear();

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const generatedMonths = [];
    for (let i = currentMonthIndex; i < 12; i++) {
      generatedMonths.push(`${monthNames[i]} ${year}`);
    }
    for (let i = 0; i < currentMonthIndex; i++) {
      generatedMonths.push(`${monthNames[i]} ${year + 1}`);
    }

    setMonths(generatedMonths);
    setSelectedMonth(generatedMonths[0]);
  }, []);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="booking-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>MediConnect</h2>
        <ul>
          <li>Dashboard</li>
          <li>Calendar</li>
          <li className="active">Booking</li>
          <li>Profile</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="booking-content">
        <header className="booking-header">
          <h1>Booking</h1>
          <div className="filter-controls">
            <select value={selectedMonth} onChange={handleMonthChange}>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <button className="new-appointment-btn">+ New Appointment</button>
          </div>
        </header>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={tab === 'upcoming' ? 'active' : ''}
            onClick={() => setTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={tab === 'past' ? 'active' : ''}
            onClick={() => setTab('past')}
          >
            Past
          </button>
          <button
            className={tab === 'cancelled' ? 'active' : ''}
            onClick={() => setTab('cancelled')}
          >
            Cancelled
          </button>
        </div>

        {/* Booking List */}
        <div className="booking-list">
          {bookings[tab].length > 0 ? (
            bookings[tab].map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-details">
                  <p>
                    <strong>{booking.date}</strong> - {booking.time}
                  </p>
                  <p>
                    <strong>Doctor:</strong> {booking.doctor}
                  </p>
                  <p>
                    <strong>Issue:</strong> {booking.issue}
                  </p>
                </div>
                <div className="booking-actions">
                  {booking.documents && <a href="#">View Documents</a>}
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings available in this category.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Booking;
