import React, { useState } from 'react';

// Dummy data for users
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editUserId, setEditUserId] = useState(null);
  const [newRole, setNewRole] = useState('');

  const handleEditClick = (userId) => {
    setEditUserId(userId);
  };

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  const handleSaveRole = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
    setEditUserId(null);
    setNewRole('');
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>

      <div className="mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editUserId === user.id ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={newRole}
                        onChange={handleRoleChange}
                        className="p-1 border rounded"
                      />
                      <button
                        onClick={() => handleSaveRole(user.id)}
                        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEditClick(user.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {editUserId === user.id ? 'Cancel' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
