import React, { useState } from 'react';

// Dummy data for support groups
const initialGroups = [
  { id: 1, name: 'Anxiety Support Group', description: 'A group for individuals dealing with anxiety.' },
  { id: 2, name: 'Depression Support Group', description: 'Support for those experiencing depression.' },
  { id: 3, name: 'Stress Management Group', description: 'Strategies and support for managing stress.' },
];

const ManageSupportGroups = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [editGroupId, setEditGroupId] = useState(null);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [editingName, setEditingName] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  const handleAddGroup = (e) => {
    e.preventDefault();
    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
      description: newGroupDescription,
    };
    setGroups([...groups, newGroup]);
    setNewGroupName('');
    setNewGroupDescription('');
  };

  const handleEditClick = (group) => {
    setEditGroupId(group.id);
    setEditingName(group.name);
    setEditingDescription(group.description);
  };

  const handleSaveEdit = (groupId) => {
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, name: editingName, description: editingDescription } : group
    ));
    setEditGroupId(null);
  };

  const handleDeleteGroup = (groupId) => {
    setGroups(groups.filter(group => group.id !== groupId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Manage Support Groups</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Current Support Groups</h3>
        <ul className="list-disc list-inside">
          {groups.map((group) => (
            <li key={group.id} className="mb-4 p-4 border rounded shadow-sm">
              {editGroupId === group.id ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Group Name:</label>
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                      value={editingDescription}
                      onChange={(e) => setEditingDescription(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      rows="4"
                      required
                    />
                  </div>
                  <button
                    onClick={() => handleSaveEdit(group.id)}
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditGroupId(null)}
                    className="ml-4 py-2 px-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-xl font-semibold">{group.name}</h4>
                  <p className="mt-2">{group.description}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEditClick(group)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteGroup(group.id)}
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
        <h3 className="text-2xl font-semibold mb-4">Create a New Support Group</h3>
        <form onSubmit={handleAddGroup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Group Name:</label>
            <input
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Description:</label>
            <textarea
              value={newGroupDescription}
              onChange={(e) => setNewGroupDescription(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Add Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageSupportGroups;
