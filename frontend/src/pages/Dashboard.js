import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData({
        name: "Daniel Lowery",
        lastLogin: "2025-01-22",
        notifications: 3,
      });
    }, 1000);
  }, []);

  if (!data) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {data.name}!</h1>
      <p>Your last login was on {data.lastLogin}.</p>
      <p>You have {data.notifications} new notifications.</p>
    </div>
  );
};

export default Dashboard;
