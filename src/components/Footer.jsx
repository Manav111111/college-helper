import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onTextEnter, onTextLeave }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CH</span>
              </div>
              <span className="text-xl font-bold">Campus Helper</span>
            </div>
            <p className="text-gray-400">
              Your AI-powered campus assistant.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white block">Home</Link>
              <Link to="/societies" className="text-gray-400 hover:text-white block">Societies</Link>
              <Link to="/about" className="text-gray-400 hover:text-white block">About</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">campus@helper.edu</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Campus Helper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;