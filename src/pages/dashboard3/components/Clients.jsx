// src/pages/Clients.jsx
import React, { useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+123456789',
      address: '456 Elm St, Springfield, USA',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+987654321',
      address: '789 Maple St, Springfield, USA',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      phone: '+192837465',
      address: '321 Oak St, Springfield, USA',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Clients</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b">
              <td className="py-3 px-4">{client.name}</td>
              <td className="py-3 px-4">{client.email}</td>
              <td className="py-3 px-4">{client.phone}</td>
              <td className="py-3 px-4">{client.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
