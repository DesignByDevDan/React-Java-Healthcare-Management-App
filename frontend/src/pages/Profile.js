import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [tab, setTab] = useState('general'); // 'general' or 'history'

  const user = {
    name: 'Steven Doe',
    role: 'General Doctor',
    age: 45,
    gender: 'Male',
    phone: '+1 123-456-7890',
    email: 'steven.doe@example.com',
    preExistingDiseases: ['Diabetes', 'Hypertension'],
    history: [
      {
        date: '2025-01-25',
        doctor: 'Dr. Amanda Claes',
        specialty: 'Cardiology',
        time: '10:00 AM',
      },
      {
        date: '2025-01-28',
        doctor: 'Dr. Jason Stanley',
        specialty: 'Dermatology',
        time: '2:00 PM',
      },
    ],
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>HealthCare</h2>
        <ul>
          <li className={tab === 'general' ? 'active' : ''} onClick={() => setTab('general')}>
            General
          </li>
          <li className={tab === 'history' ? 'active' : ''} onClick={() => setTab('history')}>
            Consultation History
          </li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="profile-content">
        <header className="profile-header">
          <h1>Profile</h1>
          <div className="user-info">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="user-avatar"
            />
            <div>
              <h2>{user.name}</h2>
              <p>{user.role}</p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        {tab === 'general' && (
          <section className="general-info">
            <h2>My Profile</h2>
            <div className="info-card">
              <h3>Personal Information</h3>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <div className="info-card">
              <h3>Pre-Existing Diseases</h3>
              <ul>
                {user.preExistingDiseases.map((disease, index) => (
                  <li key={index}>{disease}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {tab === 'history' && (
          <section className="consultation-history">
            <h2>Consultation History</h2>
            <ul>
              {user.history.map((appointment, index) => (
                <li key={index} className="history-item">
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Doctor:</strong> {appointment.doctor} ({appointment.specialty})
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default Profile;
