// // src/Dashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//     return (
//         <div className="flex">
//             <aside className="w-64 bg-gray-800 text-white h-screen">
//                 <div className="p-4">
//                     <h1 className="text-xl font-bold">Mental Health App</h1>
//                 </div>
//                 <nav className="mt-6">
//                     <ul>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/support-group" className="block p-4">Support Group</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/resources" className="block p-4">Resources</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/profile" className="block p-4">Profile</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/logout" className="block p-4">Logout</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/schedule" className="block p-4">Schedule</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/overview" className="block p-4">Overview</Link>
//                         </li>
//                         <li className="hover:bg-gray-700">
//                             <Link to="/group-detail" className="block p-4">Group Detail</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>

//             <main className="flex-1 p-6 bg-gray-100">
//                 <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
//                 {/* Add your main dashboard content here */}
//                 <div className="mt-4">
//                     <p>Welcome to your mental health dashboard! Here you can track your progress, join support groups, and access resources.</p>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Dashboard;