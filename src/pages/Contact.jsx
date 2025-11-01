import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      details: 'support@campushelper.edu',
      action: 'mailto:support@campushelper.edu'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon to Fri from 9am to 6pm',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come say hello at our office',
      details: 'Student Center, Room 205, University Campus',
      action: '#'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      details: 'Available 24/7',
      action: '#chatbot'
    }
  ];

  const faqs = [
    {
      question: 'How do I join a student society?',
      answer: 'You can browse all societies on the Societies page and click "Join Society" on any society you\'re interested in. Most societies have regular onboarding sessions.'
    },
    {
      question: 'Is Campus Helper available on mobile?',
      answer: 'Yes! Our website is fully responsive and works perfectly on all mobile devices. We\'re also developing a dedicated mobile app.'
    },
    {
      question: 'How does the AI chatbot work?',
      answer: 'Our AI chatbot uses advanced natural language processing to understand your questions about campus life. It remembers context from previous messages to provide personalized responses.'
    },
    {
      question: 'Can I suggest new features?',
      answer: 'Absolutely! We love hearing from our users. Use the contact form below to share your ideas and suggestions.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            Get In Touch
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            onMouseEnter={onTextEnter}
            onMouseLeave={onTextLeave}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 
              className="text-2xl font-bold text-gray-800 mb-6"
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              Contact Methods
            </h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ x: 5 }}
                  onMouseEnter={onTextEnter}
                  onMouseLeave={onTextLeave}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                      <a 
                        href={method.action}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        onMouseEnter={onButtonEnter}
                        onMouseLeave={onButtonLeave}
                      >
                        {method.details}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <h2 
                className="text-2xl font-bold text-gray-800 mb-6"
                onMouseEnter={onTextEnter}
                onMouseLeave={onTextLeave}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={onTextEnter}
                    onMouseLeave={onTextLeave}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl text-green-500 mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={onButtonEnter}
                    onMouseLeave={onButtonLeave}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h2 
                    className="text-2xl font-bold text-gray-800 mb-6"
                    onMouseEnter={onTextEnter}
                    onMouseLeave={onTextLeave}
                  >
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                          onMouseEnter={onTextEnter}
                          onMouseLeave={onTextLeave}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                          onMouseEnter={onTextEnter}
                          onMouseLeave={onTextLeave}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="What is this regarding?"
                          onMouseEnter={onTextEnter}
                          onMouseLeave={onTextLeave}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onMouseEnter={onTextEnter}
                          onMouseLeave={onTextLeave}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="societies">Societies & Clubs</option>
                          <option value="feedback">Feedback & Suggestions</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                        onMouseEnter={onTextEnter}
                        onMouseLeave={onTextLeave}
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      onMouseEnter={onButtonEnter}
                      onMouseLeave={onButtonLeave}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;