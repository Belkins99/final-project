import React, { useState } from 'react';

// Dummy data for schedules
const initialSchedules = [
  { id: 1, title: 'Weekly Team Meeting', date: '2024-08-14', time: '10:00 AM', location: 'Conference Room A' },
  { id: 2, title: 'Project Review', date: '2024-08-15', time: '2:00 PM', location: 'Zoom' },
  { id: 3, title: 'Monthly Planning', date: '2024-08-20', time: '1:00 PM', location: 'Office' },
];

const ManageSchedule = () => {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [newScheduleTitle, setNewScheduleTitle] = useState('');
  const [newScheduleDate, setNewScheduleDate] = useState('');
  const [newScheduleTime, setNewScheduleTime] = useState('');
  const [newScheduleLocation, setNewScheduleLocation] = useState('');
  const [editScheduleId, setEditScheduleId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDate, setEditingDate] = useState('');
  const [editingTime, setEditingTime] = useState('');
  const [editingLocation, setEditingLocation] = useState('');

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const newSchedule = {
      id: schedules.length + 1,
      title: newScheduleTitle,
      date: newScheduleDate,
      time: newScheduleTime,
      location: newScheduleLocation,
    };
    setSchedules([...schedules, newSchedule]);
    setNewScheduleTitle('');
    setNewScheduleDate('');
    setNewScheduleTime('');
    setNewScheduleLocation('');
  };

  const handleEditClick = (schedule) => {
    setEditScheduleId(schedule.id);
    setEditingTitle(schedule.title);
    setEditingDate(schedule.date);
    setEditingTime(schedule.time);
    setEditingLocation(schedule.location);
  };

  const handleSaveEdit = (scheduleId) => {
    setSchedules(schedules.map(schedule =>
      schedule.id === scheduleId ? { ...schedule, title: editingTitle, date: editingDate, time: editingTime, location: editingLocation } : schedule
    ));
    setEditScheduleId(null);
  };

  const handleDeleteSchedule = (scheduleId) => {
    setSchedules(schedules.filter(schedule => schedule.id !== scheduleId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Manage Schedule</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Current Schedules</h3>
        <ul className="list-disc list-inside">
          {schedules.map((schedule) => (
            <li key={schedule.id} className="mb-4 p-4 border rounded shadow-sm">
              {editScheduleId === schedule.id ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Title:</label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Date:</label>
                    <input
                      type="date"
                      value={editingDate}
                      onChange={(e) => setEditingDate(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Time:</label>
                    <input
                      type="time"
                      value={editingTime}
                      onChange={(e) => setEditingTime(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Location:</label>
                    <input
                      type="text"
                      value={editingLocation}
                      onChange={(e) => setEditingLocation(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <button
                    onClick={() => handleSaveEdit(schedule.id)}
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditScheduleId(null)}
                    className="ml-4 py-2 px-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-xl font-semibold">{schedule.title}</h4>
                  <p className="mt-2">{schedule.date} at {schedule.time}</p>
                  <p className="mt-2">{schedule.location}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEditClick(schedule)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSchedule(schedule.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Create a New Schedule</h3>
        <form onSubmit={handleAddSchedule} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={newScheduleTitle}
              onChange={(e) => setNewScheduleTitle(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date:</label>
            <input
              type="date"
              value={newScheduleDate}
              onChange={(e) => setNewScheduleDate(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Time:</label>
            <input
              type="time"
              value={newScheduleTime}
              onChange={(e) => setNewScheduleTime(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              value={newScheduleLocation}
              onChange={(e) => setNewScheduleLocation(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Add Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageSchedule;
