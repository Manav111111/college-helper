import React from 'react';
import { motion } from 'framer-motion';

const Canteen = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const menuItems = [
    { name: 'Vegetable Meal', price: '$5.99', category: 'Lunch', available: true },
    { name: 'Chicken Sandwich', price: '$4.50', category: 'Breakfast', available: true },
    { name: 'Pasta', price: '$6.99', category: 'Dinner', available: true },
    { name: 'Salad Bowl', price: '$4.99', category: 'Lunch', available: true },
    { name: 'Burger Combo', price: '$7.99', category: 'Dinner', available: false },
    { name: 'Smoothie', price: '$3.99', category: 'Beverages', available: true }
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
            Campus Canteen
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Check out today's menu and place your orders. Fresh and delicious meals served daily!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 
              className="text-2xl font-bold text-gray-800 mb-4"
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              Today's Menu
            </h2>
            <div className="grid gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={onTextEnter}
                  onMouseLeave={onTextLeave}
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-gray-800">{item.price}</span>
                    {item.available ? (
                      <motion.button
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={onButtonEnter}
                        onMouseLeave={onButtonLeave}
                      >
                        Order
                      </motion.button>
                    ) : (
                      <span className="text-red-500 text-sm">Sold Out</span>
                    )}
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

export default Canteen;