import React from 'react';

// Example data for a specific support group
const groupData = {
  id: 1,
  name: 'Anxiety Support Group',
  description: 'A group for individuals dealing with anxiety. We meet weekly to share experiences, strategies, and support.',
  members: [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
  ],
  events: [
    { id: 1, title: 'Weekly Meeting', date: '2024-08-15', time: '7:00 PM' },
    { id: 2, title: 'Guest Speaker: Dr. Smith', date: '2024-08-22', time: '6:00 PM' },
  ],
};

const GroupDetails = () => {
  const { name, description, members, events } = groupData;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">{name}</h2>
      <p className="text-gray-700 mb-6">{description}</p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Members</h3>
        <ul className="list-disc list-inside">
          {members.map((member) => (
            <li key={member.id} className="mb-2">
              {member.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
        <ul className="list-disc list-inside">
          {events.map((event) => (
            <li key={event.id} className="mb-4 p-4 border rounded shadow-sm">
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p className="mt-1 text-gray-600">
                Date: {event.date} | Time: {event.time}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupDetails;
