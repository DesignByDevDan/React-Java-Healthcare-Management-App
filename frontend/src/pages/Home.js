import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Steven Doe',
    appointments: [
      { id: 1, date: '2025-01-25', doctor: 'Dr. Amanda Claes', time: '10:00 AM' },
      { id: 2, date: '2025-01-28', doctor: 'Dr. Jason Stanley', time: '2:00 PM' },
    ],
    recommendations: [
      { id: 1, name: 'Dr. Amanda Claes', specialty: 'Cardiologist' },
      { id: 2, name: 'Dr. Jason Stanley', specialty: 'Dermatologist' },
      { id: 3, name: 'Dr. Jackie Zix', specialty: 'Pediatrician' },
    ],
  });

  const renderBeforeLogin = () => (
    <div className="home-container">
      <header className="hero-section">
        <h1>No need to visit local hospitals</h1>
        <p>Get your consultation online with top doctors.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search by doctor, specialty, or location" />
          <button>Search</button>
        </div>
      </header>
      <section className="recommended-doctors">
        <h2>Recommended Doctors</h2>
        <div className="doctor-cards">
          {userData.recommendations.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <button>Book an Appointment</button>
            </div>
          ))}
        </div>
      </section>
      <section className="nearby-doctors">
        <h2>Nearby Doctors</h2>
        <p>Please enable your location to see nearby doctors.</p>
      </section>
    </div>
  );

  const renderAfterLogin = () => (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome Back, {userData.name}!</h1>
        <p>No need to visit local hospitals. Get your consultation online.</p>
      </header>
      <section className="upcoming-appointments">
        <h2>Upcoming Appointments</h2>
        <ul>
          {userData.appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>
                <strong>{appointment.doctor}</strong> - {appointment.date} at {appointment.time}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="recommended-doctors">
        <h2>Recommended Doctors</h2>
        <div className="doctor-cards">
          {userData.recommendations.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <button>Book an Appointment</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className="home-page">
      {isLoggedIn ? renderAfterLogin() : renderBeforeLogin()}
    </div>
  );
};

export default Home;
