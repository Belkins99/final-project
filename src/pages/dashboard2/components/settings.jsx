import React, { useState } from 'react';


const Settings = () => {
  const [siteTitle, setSiteTitle] = useState('My Site Title');
  const [contactEmail, setContactEmail] = useState('contact@example.com');
  const [enableNotifications, setEnableNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Settings saved:', { siteTitle, contactEmail, enableNotifications });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block text-gray-700">Site Title:</label>
          <input
            type="text"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Contact Email:</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={enableNotifications}
              onChange={() => setEnableNotifications(!enableNotifications)}
              className="mr-2"
            />
            Enable Notifications
          </label>
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
