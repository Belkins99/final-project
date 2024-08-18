import React, { useState, useEffect } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Mock fetching appointments from an API
    const fetchedAppointments = [
      { id: 1, date: '2024-08-20', time: '10:00 AM', with: 'Dr. Smith' },
      { id: 2, date: '2024-08-22', time: '2:00 PM', with: 'Dr. Aikins' },
      { id: 3, date: '2024-08-25', time: '11:30 AM', with: 'Dr. Doe' },
    ];

    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">{appointment.date}</p>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-600">With {appointment.with}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">You have no upcoming appointments.</p>
      )}
    </div>
  );
};

export default MyAppointments;
