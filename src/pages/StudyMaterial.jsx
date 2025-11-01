import React from 'react';
import { motion } from 'framer-motion';

const StudyMaterial = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const materials = [
    { title: 'Computer Science Notes', course: 'CS101', type: 'PDF', uploaded: '2 days ago' },
    { title: 'Mathematics Formulas', course: 'MATH201', type: 'PDF', uploaded: '1 week ago' },
    { title: 'Physics Lab Manual', course: 'PHY102', type: 'DOC', uploaded: '3 days ago' },
    { title: 'Chemistry Presentations', course: 'CHEM101', type: 'PPT', uploaded: '5 days ago' },
    { title: 'Engineering Drawing', course: 'ENG150', type: 'PDF', uploaded: '1 day ago' },
    { title: 'Programming Exercises', course: 'CS102', type: 'ZIP', uploaded: '4 days ago' }
  ];

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
            Study Material
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Access course materials, notes, presentations, and other resources shared by faculty and students.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <motion.div
                  key={material.title}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={onTextEnter}
                  onMouseLeave={onTextLeave}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{material.type}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {material.course}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{material.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{material.uploaded}</span>
                    <motion.button
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={onButtonEnter}
                      onMouseLeave={onButtonLeave}
                    >
                      Download
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;