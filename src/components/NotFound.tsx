import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-12">
    <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
    <p className="text-xl text-secondary mb-8">Page Not Found</p>
    <Link to="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
      Go to Home
    </Link>
  </div>
);

export default NotFound; 