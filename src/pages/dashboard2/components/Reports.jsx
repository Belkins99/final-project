import React, { useState } from 'react';

// Dummy data for reports
const initialReports = [
  { id: 1, title: 'Monthly Usage Report', date: '2024-08-01', summary: 'Summary of usage statistics for August.' },
  { id: 2, title: 'User Engagement Report', date: '2024-07-15', summary: 'Engagement metrics for July.' },
  { id: 3, title: 'Feedback Analysis', date: '2024-06-30', summary: 'Analysis of user feedback and suggestions.' },
];

const ManageReports = () => {
  const [reports, setReports] = useState(initialReports);
  const [newReportTitle, setNewReportTitle] = useState('');
  const [newReportDate, setNewReportDate] = useState('');
  const [newReportSummary, setNewReportSummary] = useState('');
  const [editReportId, setEditReportId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDate, setEditingDate] = useState('');
  const [editingSummary, setEditingSummary] = useState('');

  const handleAddReport = (e) => {
    e.preventDefault();
    const newReport = {
      id: reports.length + 1,
      title: newReportTitle,
      date: newReportDate,
      summary: newReportSummary,
    };
    setReports([...reports, newReport]);
    setNewReportTitle('');
    setNewReportDate('');
    setNewReportSummary('');
  };

  const handleEditClick = (report) => {
    setEditReportId(report.id);
    setEditingTitle(report.title);
    setEditingDate(report.date);
    setEditingSummary(report.summary);
  };

  const handleSaveEdit = (reportId) => {
    setReports(reports.map(report =>
      report.id === reportId ? { ...report, title: editingTitle, date: editingDate, summary: editingSummary } : report
    ));
    setEditReportId(null);
  };

  const handleDeleteReport = (reportId) => {
    setReports(reports.filter(report => report.id !== reportId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6">Manage Reports</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Current Reports</h3>
        <ul className="list-disc list-inside">
          {reports.map((report) => (
            <li key={report.id} className="mb-4 p-4 border rounded shadow-sm">
              {editReportId === report.id ? (
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
                    <label className="block text-gray-700">Date:</label>
                    <input
                      type="date"
                      value={editingDate}
                      onChange={(e) => setEditingDate(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Summary:</label>
                    <textarea
                      value={editingSummary}
                      onChange={(e) => setEditingSummary(e.target.value)}
                      className="mt-1 p-2 border rounded w-full"
                      rows="4"
                      required
                    />
                  </div>
                  <button
                    onClick={() => handleSaveEdit(report.id)}
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditReportId(null)}
                    className="ml-4 py-2 px-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-xl font-semibold">{report.title}</h4>
                  <p className="mt-2">{report.date}</p>
                  <p className="mt-2">{report.summary}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEditClick(report)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteReport(report.id)}
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
        <h3 className="text-2xl font-semibold mb-4">Create a New Report</h3>
        <form onSubmit={handleAddReport} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={newReportTitle}
              onChange={(e) => setNewReportTitle(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date:</label>
            <input
              type="date"
              value={newReportDate}
              onChange={(e) => setNewReportDate(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Summary:</label>
            <textarea
              value={newReportSummary}
              onChange={(e) => setNewReportSummary(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Add Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageReports;
