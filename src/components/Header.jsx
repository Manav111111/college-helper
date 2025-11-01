import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isLoggedIn, user, onLogout, onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Societies', path: '/societies' },
    { name: 'Canteen', path: '/canteen' },
    { name: 'Study Material', path: '/study-material' },
    { name: 'Notices', path: '/notices' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onMouseEnter={onTextEnter}
          onMouseLeave={onTextLeave}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">CH</span>
          </div>
          <span className="text-xl font-bold text-blue-700">Campus Helper</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`py-2 px-1 font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 hidden sm:inline-block">
                Hello, {user?.name || 'User'}
              </span>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                onMouseEnter={onButtonEnter}
                onMouseLeave={onButtonLeave}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onMouseEnter={onButtonEnter}
                onMouseLeave={onButtonLeave}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;