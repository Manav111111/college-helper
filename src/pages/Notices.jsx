import React from 'react';
import { motion } from 'framer-motion';

const Notices = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const notices = [
    { title: 'Tech Fest 2023 Registration', date: 'Oct 10, 2023', priority: 'high', department: 'All' },
    { title: 'Library Closing Early', date: 'Oct 12, 2023', priority: 'medium', department: 'Library' },
    { title: 'Sports Complex Maintenance', date: 'Oct 15, 2023', priority: 'medium', department: 'Sports' },
    { title: 'Scholarship Application Deadline', date: 'Oct 20, 2023', priority: 'high', department: 'Administration' },
    { title: 'Cultural Night Rehearsals', date: 'Oct 18, 2023', priority: 'low', department: 'Cultural' },
    { title: 'Hostel Fee Payment Reminder', date: 'Oct 25, 2023', priority: 'high', department: 'Hostel' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl font-bold text-gray-800 mb-4"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Campus Notices
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Stay updated with the latest announcements, events, and important information from the campus.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.title}
              className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(notice.priority)}`}>
                  {notice.priority.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-600 text-sm">Department: {notice.department}</span>
                  <span className="text-gray-500 text-sm ml-4">Posted: {notice.date}</span>
                </div>
                <motion.button
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={onButtonEnter}
                  onMouseLeave={onButtonLeave}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;