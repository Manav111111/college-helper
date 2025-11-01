import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Campus Helper
          </h1>
          <p className="text-xl mb-8">
            Your AI-powered assistant for campus life
          </p>
          <Link to="/login">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors"
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
              <p>Get instant answers to your campus questions</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Study Materials</h3>
              <p>Access course materials and resources</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p>Stay updated with campus events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;