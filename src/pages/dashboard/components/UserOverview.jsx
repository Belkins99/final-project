// src/pages/dashboard/components/UserOverview.jsx
import React from 'react';

const UserOverview = () => {
  return (
    <section id='useroverview' className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">User Overview</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">Mood Tracker</h3>
        <input type="range" min="1" max="5" defaultValue="3" className="w-full mt-2" />
        <label className="block mt-2">How do you feel today?</label>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">Activity Log</h3>
        <ul className="list-disc pl-5">
          <li>Exercise</li>
          <li>Meditation</li>
          <li>Socializing</li>
        </ul>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">Resources</h3>
        <p>Helpful articles on mental health.</p>
        <ul className="list-disc pl-5 mt-2">
          <li><a href="#!">Understanding Anxiety</a></li>
          <li><a href="#!">Coping Strategies</a></li>
        </ul>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">Your Goals</h3>
        <p>Track your progress towards reducing stress.</p>
        <div className="mt-2">60% completed</div>
      </div>
    </section>
  );
};

export default UserOverview;