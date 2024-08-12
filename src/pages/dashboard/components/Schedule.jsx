import React, { useState } from 'react';

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: '',
    notes: '',
    reminderEmail: false,
    reminderSMS: false,
    contactMethod: 'email'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Schedule Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Type of Session:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          >
            <option value="">Select</option>
            <option value="therapy">Therapy Session</option>
            <option value="consultation">Consultation</option>
            <option value="followup">Follow-Up</option>
            <option value="selfcare">Self-Care Reminder</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Additional Information:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Send Reminder Email:</label>
          <input
            type="checkbox"
            name="reminderEmail"
            checked={formData.reminderEmail}
            onChange={handleChange}
            className="mr-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Send Reminder SMS:</label>
          <input
            type="checkbox"
            name="reminderSMS"
            checked={formData.reminderSMS}
            onChange={handleChange}
            className="mr-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preferred Contact Method:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Email</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="sms"
              checked={formData.contactMethod === 'sms'}
              onChange={handleChange}
              className="mr-2"
            />
            <label>SMS</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="both"
              checked={formData.contactMethod === 'both'}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Both</label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
