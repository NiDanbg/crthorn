import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
          <p className="text-gray-600">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. You can also choose to decline non-essential cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Decline Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 