import React, { useState } from 'react';

// Dummy data for resources
const initialResources = [
  { id: 1, title: 'Mental Health Guide', description: 'A comprehensive guide on mental health.' },
  { id: 2, title: 'Self-Care Tips', description: 'Tips and strategies for effective self-care.' },
  { id: 3, title: 'Crisis Helplines', description: 'List of important crisis helplines and contacts.' },
];

const ManageResources = () => {
  const [resources, setResources] = useState(initialResources);
  const [editResourceId, setEditResourceId] = useState(null);
  const [newResourceTitle, setNewResourceTitle] = useState('');
  const [newResourceDescription, setNewResourceDescription] = useState('');
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  const handleAddResource = (e) => {
    e.preventDefault();
    const newResource = {
      id: resources.length + 1,
      title: newResourceTitle,
      description: newResourceDescription,
    };
    setResources([...resources, newResource]);
    setNewResourceTitle('');
    setNewResourceDescription('');
  };

  const handleEditClick = (resource) => {
    setEditResourceId(resource.id);
    setEditingTitle(resource.title);
    setEditingDescription(resource.description);
  };

  const handleSaveEdit = (resourceId) => {
    setResources(resources.map(resource =>
      resource.id === resourceId ? { ...resource, title: editingTitle, description: editingDescription } : resource
    ));
    setEditResourceId(null);
  };

  const handleDeleteResource = (resourceId) => {
    setResources(resources.filter(resource => resource.id !== resourceId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Manage Resources</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Current Resources</h3>
        <ul className="list-disc list-inside">
          {resources.map((resource) => (
            <li key={resource.id} className="mb-4 p-4 border rounded shadow-sm">
              {editResourceId === resource.id ? (
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
                    onClick={() => handleSaveEdit(resource.id)}
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditResourceId(null)}
                    className="ml-4 py-2 px-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-xl font-semibold">{resource.title}</h4>
                  <p className="mt-2">{resource.description}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEditClick(resource)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteResource(resource.id)}
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
        <h3 className="text-2xl font-semibold mb-4">Create a New Resource</h3>
        <form onSubmit={handleAddResource} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={newResourceTitle}
              onChange={(e) => setNewResourceTitle(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Description:</label>
            <textarea
              value={newResourceDescription}
              onChange={(e) => setNewResourceDescription(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Add Resource
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageResources;
