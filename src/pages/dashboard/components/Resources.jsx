import React from 'react';
import resources from '../../../pages/ResourceDetal'

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h2>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold"
      >
        View Resource
      </a>
     
    </div>
  );
};

const ResourceList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
