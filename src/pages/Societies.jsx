import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Societies = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSociety, setSelectedSociety] = useState(null);

  const technicalSocieties = [
    {
      id: 1,
      name: 'Geek Room',
      category: 'technical',
      description: 'The ultimate hub for coding enthusiasts and tech innovators',
      image: '💻',
      members: 250,
      president: 'Alex Chen',
      email: 'geekroom@campus.edu',
      events: ['Hackathons', 'Code Workshops', 'Tech Talks', 'Project Showcases'],
      achievements: ['Won National Hackathon 2023', '50+ Projects Completed'],
      joinLink: '#join-geekroom'
    },
    {
      id: 2,
      name: 'GDC (Game Development Club)',
      category: 'technical',
      description: 'Creating immersive gaming experiences and learning game development',
      image: '🎮',
      members: 180,
      president: 'Sarah Martinez',
      email: 'gdc@campus.edu',
      events: ['Game Jams', 'Unity Workshops', 'VR Development', 'Industry Talks'],
      achievements: ['Published 15+ Games', 'Partnership with Unity Technologies'],
      joinLink: '#join-gdc'
    },
    {
      id: 3,
      name: 'Robotics Club',
      category: 'technical',
      description: 'Building intelligent machines and exploring automation',
      image: '🤖',
      members: 120,
      president: 'David Kim',
      email: 'robotics@campus.edu',
      events: ['Robo Wars', 'AI Workshops', 'Industrial Visits', 'Research Projects'],
      achievements: ['National Robotics Competition Winners', '5 Patents Filed'],
      joinLink: '#join-robotics'
    },
    {
      id: 4,
      name: 'AI & ML Society',
      category: 'technical',
      description: 'Pioneering artificial intelligence and machine learning research',
      image: '🧠',
      members: 200,
      president: 'Dr. Priya Sharma',
      email: 'aiml@campus.edu',
      events: ['Kaggle Competitions', 'Research Papers', 'Industry Collaborations', 'Tech Conferences'],
      achievements: ['Published in IEEE', 'AI Model Deployments'],
      joinLink: '#join-aiml'
    }
  ];

  const nonTechnicalSocieties = [
    {
      id: 5,
      name: 'Aura Society',
      category: 'non-technical',
      description: 'Expressing creativity through art, music, and cultural activities',
      image: '🎨',
      members: 300,
      president: 'Maria Gonzalez',
      email: 'aura@campus.edu',
      events: ['Art Exhibitions', 'Music Concerts', 'Cultural Fest', 'Creative Workshops'],
      achievements: ['Annual Art Fest Host', 'Community Outreach Programs'],
      joinLink: '#join-aura'
    },
    {
      id: 6,
      name: 'Drama Club',
      category: 'non-technical',
      description: 'Bringing stories to life through theater and performance',
      image: '🎭',
      members: 150,
      president: 'James Wilson',
      email: 'drama@campus.edu',
      events: ['Stage Plays', 'Improv Nights', 'Script Writing', 'Acting Workshops'],
      achievements: ['Inter-College Drama Fest Winners', 'Original Productions'],
      joinLink: '#join-drama'
    },
    {
      id: 7,
      name: 'Sports Society',
      category: 'non-technical',
      description: 'Promoting fitness, sportsmanship, and athletic excellence',
      image: '⚽',
      members: 400,
      president: 'Michael Brown',
      email: 'sports@campus.edu',
      events: ['Tournaments', 'Fitness Challenges', 'Sports Clinics', 'Marathons'],
      achievements: ['University Champions 2023', 'Community Fitness Programs'],
      joinLink: '#join-sports'
    },
    {
      id: 8,
      name: 'Literary Society',
      category: 'non-technical',
      description: 'Celebrating the power of words and creative expression',
      image: '📚',
      members: 180,
      president: 'Emily Watson',
      email: 'literary@campus.edu',
      events: ['Poetry Slams', 'Book Clubs', 'Writing Workshops', 'Debate Competitions'],
      achievements: ['Published College Magazine', 'National Debate Winners'],
      joinLink: '#join-literary'
    }
  ];

  const allSocieties = [...technicalSocieties, ...nonTechnicalSocieties];

  const filteredSocieties = activeCategory === 'all' 
    ? allSocieties 
    : allSocieties.filter(society => society.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Societies', count: allSocieties.length },
    { id: 'technical', name: 'Technical', count: technicalSocieties.length },
    { id: 'non-technical', name: 'Non-Technical', count: nonTechnicalSocieties.length }
  ];

  const openModal = (society) => {
    setSelectedSociety(society);
  };

  const closeModal = () => {
    setSelectedSociety(null);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Student Societies
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Join our vibrant community of student-led societies. Find your passion, 
            develop skills, and make lifelong connections.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Societies Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredSocieties.map((society, index) => (
            <motion.div
              key={society.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{society.image}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    society.category === 'technical' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {society.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{society.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{society.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>👥 {society.members} members</span>
                  <span>📧 {society.email}</span>
                </div>

                <div className="space-y-2">
                  <motion.button
                    onClick={() => openModal(society)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={onButtonEnter}
                    onMouseLeave={onButtonLeave}
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={onButtonEnter}
                    onMouseLeave={onButtonLeave}
                  >
                    Join Society
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredSocieties.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No societies found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Society Detail Modal */}
      {selectedSociety && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{selectedSociety.image}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedSociety.name}</h2>
                    <p className="text-gray-600">{selectedSociety.description}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                  onMouseEnter={onButtonEnter}
                  onMouseLeave={onButtonLeave}
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Society Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">President:</span> {selectedSociety.president}</p>
                    <p><span className="font-medium">Members:</span> {selectedSociety.members}</p>
                    <p><span className="font-medium">Email:</span> {selectedSociety.email}</p>
                    <p><span className="font-medium">Category:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        selectedSociety.category === 'technical' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {selectedSociety.category}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Upcoming Events</h3>
                  <ul className="space-y-1 text-sm">
                    {selectedSociety.events.map((event, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Achievements</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {selectedSociety.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={onButtonEnter}
                  onMouseLeave={onButtonLeave}
                >
                  Join {selectedSociety.name}
                </motion.button>
                <motion.button
                  onClick={closeModal}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={onButtonEnter}
                  onMouseLeave={onButtonLeave}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Societies;