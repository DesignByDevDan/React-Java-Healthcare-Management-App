import React, { useState } from 'react';
import './MedicalRecords.css';

const MedicalRecords = () => {
  // Example medical records data
  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      date: '2025-01-10',
      doctor: 'Dr. Amanda Claes',
      specialty: 'Cardiology',
      type: 'ECG Report',
      notes: 'Patient showed no abnormal signs.',
      file: 'ecg_report_2025.pdf',
    },
    {
      id: 2,
      date: '2025-01-15',
      doctor: 'Dr. Jason Stanley',
      specialty: 'Dermatology',
      type: 'Skin Test Results',
      notes: 'Mild irritation; prescribed topical cream.',
      file: 'skin_test_2025.pdf',
    },
    {
      id: 3,
      date: '2025-01-20',
      doctor: 'Dr. Jackie Zix',
      specialty: 'Pediatrics',
      type: 'Vaccination Record',
      notes: 'All vaccines up to date.',
      file: 'vaccination_record_2025.pdf',
    },
  ]);

  const handleDownload = (fileName) => {
    console.log(`Downloading file: ${fileName}`);
    // Implement file download logic here
  };

  return (
    <div className="medical-records-container">
      <h2>Medical Records</h2>
      <p>Below are your medical records. Click on a record to view or download its details.</p>
      <table className="medical-records-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Specialty</th>
            <th>Type</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicalRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.doctor}</td>
              <td>{record.specialty}</td>
              <td>{record.type}</td>
              <td>{record.notes}</td>
              <td>
                <button
                  className="download-button"
                  onClick={() => handleDownload(record.file)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRecords;
