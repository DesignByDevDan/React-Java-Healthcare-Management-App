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
        recentActivity: [
          { id: 1, activity: "Scheduled a new appointment on 2025-01-20" },
          { id: 2, activity: "Updated profile information on 2025-01-18" },
          { id: 3, activity: "Received a notification about an upcoming appointment" },
        ],
        quickLinks: [
          { label: "Manage Profile", url: "/profile" },
          { label: "View Appointments", url: "/appointments" },
          { label: "Settings", url: "/settings" },
        ],
      });
    }, 1000);
  }, []);

  if (!data) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome, {data.name}!</h1>
        <p>Your last login was on {data.lastLogin}.</p>
        <p>You have {data.notifications} new notifications.</p>
      </section>

      {/* Notifications Section */}
      <section className="notifications-section">
        <h2 className="section-title">Notifications</h2>
        <p>You have {data.notifications} new notification(s).</p>
      </section>

      {/* Recent Activity Section */}
      <section className="recent-activity-section">
        <h2 className="section-title">Recent Activity</h2>
        <ul className="activity-list">
          {data.recentActivity.map((activity) => (
            <li key={activity.id} className="activity-item">
              {activity.activity}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2 className="section-title">Quick Links</h2>
        <div className="quick-links-grid">
          {data.quickLinks.map((link, index) => (
            <a key={index} href={link.url} className="quick-link">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
