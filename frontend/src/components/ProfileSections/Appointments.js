import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming', 'past', 'canceled'

  // Example appointment data
  const appointments = {
    upcoming: [
      {
        id: 1,
        date: '2025-02-10',
        time: '10:00 AM',
        doctor: 'Dr. Amanda Claes',
        specialty: 'Cardiology',
        location: 'Room 101, City Hospital',
      },
      {
        id: 2,
        date: '2025-02-15',
        time: '1:00 PM',
        doctor: 'Dr. Jason Stanley',
        specialty: 'Dermatology',
        location: 'Room 203, Green Valley Clinic',
      },
    ],
    past: [
      {
        id: 3,
        date: '2025-01-20',
        time: '9:30 AM',
        doctor: 'Dr. Jackie Zix',
        specialty: 'Pediatrics',
        location: 'Room 205, City Hospital',
      },
    ],
    canceled: [
      {
        id: 4,
        date: '2025-01-25',
        time: '2:30 PM',
        doctor: 'Dr. Richard Green',
        specialty: 'General Medicine',
        location: 'Online Consultation',
      },
    ],
  };

  const renderAppointments = (type) => {
    if (appointments[type].length === 0) {
      return <p>No {type} appointments available.</p>;
    }

    return appointments[type].map((appointment) => (
      <div key={appointment.id} className="appointment-card">
        <h3>{appointment.date}</h3>
        <p>
          <strong>Time:</strong> {appointment.time}
        </p>
        <p>
          <strong>Doctor:</strong> {appointment.doctor}
        </p>
        <p>
          <strong>Specialty:</strong> {appointment.specialty}
        </p>
        <p>
          <strong>Location:</strong> {appointment.location}
        </p>
        {type === 'upcoming' && (
          <div className="appointment-actions">
            <button className="reschedule-button">Reschedule</button>
            <button className="cancel-button">Cancel</button>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
        <button
          className={`tab-button ${activeTab === 'canceled' ? 'active' : ''}`}
          onClick={() => setActiveTab('canceled')}
        >
          Canceled
        </button>
      </div>
      <div className="appointments-list">{renderAppointments(activeTab)}</div>
    </div>
  );
};

export default Appointments;
