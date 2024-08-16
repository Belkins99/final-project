// src/pages/Resources.jsx
import React, { useState } from 'react';

const ProfessionalResources = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Mental Health Guide',
      description: 'A comprehensive guide on mental health practices and techniques.',
      link: 'https://example.com/mental-health-guide',
    },
    {
      id: 2,
      title: 'Therapist Toolkit',
      description: 'Tools and resources for therapists to enhance their practice.',
      link: 'https://example.com/therapist-toolkit',
    },
    {
      id: 3,
      title: 'Patient Support Materials',
      description: 'Materials to help support and educate patients.',
      link: 'https://example.com/patient-support',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Resources</h2>
      <ul className="space-y-4">
        {resources.map((resource) => (
          <li key={resource.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-blue-800">{resource.title}</h3>
            <p className="text-gray-700">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Access Resource
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalResources;
