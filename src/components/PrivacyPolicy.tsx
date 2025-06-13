import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Data Controller</h2>
        <p className="mb-4">
          We are the data controller of your personal data. If you have any questions about this Privacy Policy or our data practices, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Personal Data We Collect</h2>
        <p className="mb-4">
          We may collect the following types of personal data:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email address)</li>
          <li>Usage data (cookies, IP address)</li>
          <li>Device information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Data</h2>
        <p className="mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">
          Under GDPR, you have the following rights:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Right to access your personal data</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object</li>
          <li>Right to withdraw consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your experience on our website. You can control and manage cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="mb-4">
          Email: thorncrispin@gmail.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 