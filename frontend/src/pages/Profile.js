import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { FaUserCircle } from 'react-icons/fa';
import './Profile.css';

// Import all profile section components
import MedicalRecords from '../components/ProfileSections/MedicalRecords';
import Appointments from '../components/ProfileSections/Appointments';
import Notifications from '../components/ProfileSections/Notifications';
import HealthTracker from '../components/ProfileSections/HealthTracker';
import InsuranceInformation from '../components/ProfileSections/InsuranceInformation';
import BillingPayments from '../components/ProfileSections/BillingPayments';
import FamilyMembers from '../components/ProfileSections/FamilyMembers';
import Prescriptions from '../components/ProfileSections/Prescriptions';
import HealthTips from '../components/ProfileSections/HealthTips';
import Teleconsultation from '../components/ProfileSections/Teleconsultation';
import EmergencyContacts from '../components/ProfileSections/EmergencyContacts';
import HelpSupport from '../components/ProfileSections/HelpSupport';
import Feedback from '../components/ProfileSections/Feedback';

const Profile = () => {
  const [tab, setTab] = useState('general'); // Default active tab

  const user = {
    name: 'Steven Doe',
    role: 'General Doctor',
    age: 45,
    gender: 'Male',
    phone: '+1 123-456-7890',
    email: 'steven.doe@example.com',
    preExistingDiseases: ['Diabetes', 'Hypertension'],
    avatar: '', // Placeholder for avatar URL
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
        <h2>Profile</h2>
        <ul>
          <li className={tab === 'general' ? 'active' : ''} onClick={() => setTab('general')}>
            General
          </li>
          <li className={tab === 'history' ? 'active' : ''} onClick={() => setTab('history')}>
            Consultation History
          </li>
          <li className={tab === 'medical-records' ? 'active' : ''} onClick={() => setTab('medical-records')}>
            Medical Records
          </li>
          <li className={tab === 'appointments' ? 'active' : ''} onClick={() => setTab('appointments')}>
            Appointments
          </li>
          <li className={tab === 'notifications' ? 'active' : ''} onClick={() => setTab('notifications')}>
            Notifications
          </li>
          <li className={tab === 'health-tracker' ? 'active' : ''} onClick={() => setTab('health-tracker')}>
            Health Tracker
          </li>
          <li className={tab === 'insurance' ? 'active' : ''} onClick={() => setTab('insurance')}>
            Insurance Information
          </li>
          <li className={tab === 'billing' ? 'active' : ''} onClick={() => setTab('billing')}>
            Billing & Payments
          </li>
          <li className={tab === 'family' ? 'active' : ''} onClick={() => setTab('family')}>
            Family Members
          </li>
          <li className={tab === 'prescriptions' ? 'active' : ''} onClick={() => setTab('prescriptions')}>
            Prescriptions
          </li>
          <li className={tab === 'health-tips' ? 'active' : ''} onClick={() => setTab('health-tips')}>
            Health Tips
          </li>
          <li className={tab === 'teleconsultation' ? 'active' : ''} onClick={() => setTab('teleconsultation')}>
            Teleconsultation
          </li>
          <li className={tab === 'emergency' ? 'active' : ''} onClick={() => setTab('emergency')}>
            Emergency Contacts
          </li>
          <li className={tab === 'help' ? 'active' : ''} onClick={() => setTab('help')}>
            Help & Support
          </li>
          <li className={tab === 'feedback' ? 'active' : ''} onClick={() => setTab('feedback')}>
            Feedback
          </li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="profile-content">
        <header className="profile-header">
          <h1>Profile</h1>
          <div className="user-info">
            {/* Avatar with fallback */}
            <div className="user-avatar">
              {user.avatar ? (
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                  style={{ width: 50, height: 50 }}
                />
              ) : (
                <FaUserCircle size={50} color="#555" />
              )}
            </div>
            <div>
              <h2>{user.name}</h2>
              <p>{user.role}</p>
            </div>
          </div>
        </header>

        {/* Tab Content */}
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

        {tab === 'medical-records' && <MedicalRecords />}
        {tab === 'appointments' && <Appointments />}
        {tab === 'notifications' && <Notifications />}
        {tab === 'health-tracker' && <HealthTracker />}
        {tab === 'insurance' && <InsuranceInformation />}
        {tab === 'billing' && <BillingPayments />}
        {tab === 'family' && <FamilyMembers />}
        {tab === 'prescriptions' && <Prescriptions />}
        {tab === 'health-tips' && <HealthTips />}
        {tab === 'teleconsultation' && <Teleconsultation />}
        {tab === 'emergency' && <EmergencyContacts />}
        {tab === 'help' && <HelpSupport />}
        {tab === 'feedback' && <Feedback />}
      </main>
    </div>
  );
};

export default Profile;
