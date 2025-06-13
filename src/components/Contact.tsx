import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the Google Form URL with prefilled values
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd6oAve7uoiaXMJWWukyYHWEZQgGTJxPgCpV40E-f3mCNkQtw/formResponse';
    const formUrl = `${baseUrl}?entry.1843393081=${encodeURIComponent(formData.name)}&entry.1799285576=${encodeURIComponent(formData.email)}&entry.530113389=${encodeURIComponent(formData.message)}`;
    
    // Submit the form using a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = formUrl;
    document.body.appendChild(iframe);
    
    // Show feedback message
    setSubmitted(true);
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
    
    // Remove the iframe after submission
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewMessage = () => {
    setSubmitted(false);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
      {submitted ? (
        <div className="text-center space-y-6">
          <div className="text-2xl font-semibold text-green-600">Thank you for your message!</div>
          <div className="text-gray-700">We have received your message and will get back to you soon.</div>
          <button
            onClick={handleNewMessage}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3 text-base"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3 text-base"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3 text-base resize-vertical"
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact; 