// src/pages/Appointments.jsx
import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: 'Jane Doe',
      date: '2024-08-20',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      clientName: 'John Smith',
      date: '2024-08-21',
      time: '02:00 PM',
      status: 'Pending',
    },
    {
      id: 3,
      clientName: 'Emily Johnson',
      date: '2024-08-22',
      time: '11:00 AM',
      status: 'Completed',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Client Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Time</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b">
              <td className="py-3 px-4">{appointment.clientName}</td>
              <td className="py-3 px-4">{appointment.date}</td>
              <td className="py-3 px-4">{appointment.time}</td>
              <td className="py-3 px-4">
                <span
                  className={`py-1 px-3 rounded-full text-white ${
                    appointment.status === 'Confirmed'
                      ? 'bg-green-500'
                      : appointment.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
