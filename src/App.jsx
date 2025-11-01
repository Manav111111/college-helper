import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import components
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Societies from './pages/Societies';
import Canteen from './pages/Canteen';
import StudyMaterial from './pages/StudyMaterial';
import Notices from './pages/Notices';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';


import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#3b82f6",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#ffffff",
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#10b981",
    }
  };

  // Event handlers
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Common props
  const commonProps = {
    onTextEnter: textEnter,
    onTextLeave: textLeave,
    onButtonEnter: buttonEnter,
    onButtonLeave: buttonLeave
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Custom Cursor */}
        <motion.div 
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
        
        {/* Header */}
        <Header 
          isLoggedIn={isLoggedIn} 
          user={user} 
          onLogout={handleLogout}
          {...commonProps}
        />
        
        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home {...commonProps} />} />
            <Route path="/societies" element={<Societies {...commonProps} />} />
            <Route path="/canteen" element={<Canteen {...commonProps} />} />
            <Route path="/study-material" element={<StudyMaterial {...commonProps} />} />
            <Route path="/notices" element={<Notices {...commonProps} />} />
            <Route path="/about" element={<About {...commonProps} />} />
            <Route 
              path="/login" 
              element={<Login onLogin={handleLogin} {...commonProps} />} 
            />
            <Route 
              path="/signup" 
              element={<Signup onLogin={handleLogin} {...commonProps} />} 
            />
          </Routes>
        </main>
        
        {/* Chatbot */}
        <Chatbot {...commonProps} />
        
        {/* Footer */}
        <Footer {...commonProps} />
      </div>
    </Router>
  );
}

export default App;