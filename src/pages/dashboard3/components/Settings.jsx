// src/pages/Settings.jsx
import React, { useState } from 'react';

const ProfessionalSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'English',
  });

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleLanguageChange = (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      language: e.target.value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      <div className="space-y-6">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Enable Notifications</label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleToggle}
            className="w-6 h-6"
          />
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Dark Mode</label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleToggle}
            className="w-6 h-6"
          />
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Language</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleLanguageChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ProfessionalSettings;
