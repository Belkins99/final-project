import React, { useState } from 'react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule Data:', formData);
    // You can add code here to submit the form data to an API or store it in state
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Schedule;
