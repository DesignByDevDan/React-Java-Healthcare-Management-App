import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  // Example notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Reminder',
      message: 'Your appointment with Dr. Amanda Claes is tomorrow at 10:00 AM.',
      date: '2025-01-29',
      read: false,
    },
    {
      id: 2,
      type: 'Health Tip',
      message: 'Drink at least 8 glasses of water daily to stay hydrated.',
      date: '2025-01-27',
      read: true,
    },
    {
      id: 3,
      type: 'Alert',
      message: 'Your prescription for Medication X is due for renewal.',
      date: '2025-01-25',
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="notification-content">
                <h3 className="notification-type">{notification.type}</h3>
                <p className="notification-message">{notification.message}</p>
                <p className="notification-date">{notification.date}</p>
              </div>
              <div className="notification-actions">
                {!notification.read && (
                  <button
                    className="mark-as-read-button"
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => deleteNotification(notification.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
