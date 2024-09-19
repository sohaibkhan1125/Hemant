'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  // Function to generate a new password
  const generatePassword = () => {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  // Function to copy the password to clipboard
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <TopMenu />
      <section className="flex-grow flex items-center justify-center">
        <div className="container max-w-md text-center">
          <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
          <div className="result-container mb-5">
            <input
              type="text"
              id="password"
              value={password}
              className="border-2 border-gray-400 rounded px-4 py-2 w-full mb-4"
              readOnly
            />
            <button
              onClick={generatePassword}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Generate Password
            </button>
          </div>
          <button
            onClick={copyToClipboard}
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Copy Password
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PasswordGenerator;
