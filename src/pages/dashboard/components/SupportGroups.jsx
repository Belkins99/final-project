import React, { useState } from 'react';

// Dummy data for support groups
const initialGroups = [
  { id: 1, name: 'Anxiety Support Group', description: 'A group for individuals dealing with anxiety.' },
  { id: 2, name: 'Depression Support Group', description: 'Support for those experiencing depression.' },
  { id: 3, name: 'Stress Management Group', description: 'Strategies and support for managing stress.' },
];

const SupportGroup = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [joinedGroups, setJoinedGroups] = useState([]);

  const handleJoinGroup = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups([...joinedGroups, groupId]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Support Groups</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Join a Group</h3>
        <ul className="list-disc list-inside">
          {groups.map((group) => (
            <li
              key={group.id}
              className="mb-4 p-4 border rounded shadow-sm flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-semibold">{group.name}</h4>
                <p className="mt-2">{group.description}</p>
              </div>
              <button
                onClick={() => handleJoinGroup(group.id)}
                className={`ml-4 py-2 px-4 text-white font-bold rounded ${
                  joinedGroups.includes(group.id)
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
                disabled={joinedGroups.includes(group.id)}
              >
                {joinedGroups.includes(group.id) ? 'Joined' : 'Join'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportGroup;
