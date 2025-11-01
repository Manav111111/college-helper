import React from 'react';
import { motion } from 'framer-motion';

const About = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Assistance',
      description: 'Smart chatbot that understands context and provides personalized responses'
    },
    {
      icon: '📱',
      title: 'All-in-One Platform',
      description: 'Access events, notices, study materials, and campus services in one place'
    },
    {
      icon: '⚡',
      title: 'Real-Time Updates',
      description: 'Get instant notifications about campus events and important announcements'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security measures'
    }
  ];

  const team = [
    { name: 'John Doe', role: 'Project Lead', avatar: '👨‍💼' },
    { name: 'Jane Smith', role: 'Frontend Developer', avatar: '👩‍💻' },
    { name: 'Mike Johnson', role: 'Backend Developer', avatar: '👨‍🔧' },
    { name: 'Sarah Wilson', role: 'UI/UX Designer', avatar: '👩‍🎨' }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            About Campus Helper
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Campus Helper is an AI-powered platform designed to enhance student life by providing 
            instant access to campus information, events, resources, and support services.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Why Choose Campus Helper?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={onTextEnter}
                onMouseLeave={onTextLeave}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onMouseEnter={onTextEnter}
                onMouseLeave={onTextLeave}
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div>Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div>Clubs & Societies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div>AI Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;