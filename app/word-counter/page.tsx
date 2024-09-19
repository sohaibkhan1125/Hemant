'use client';
import React, { useState } from 'react';
import Footer from '../Footer';
import TopMenu from '../TopMenu';

const Page = () => {
  const [text, setText] = useState<string>('');  // State to hold the text input
  const [wordCount, setWordCount] = useState<number>(0);  // State to hold the word count

  // Function to count words
  const countWords = () => {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    setWordCount(trimmedText ? words.length : 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Word Counter Tool</h1>

        <p className="text-lg text-gray-700 mb-4 text-center">Enter your text below:</p>
        
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          className="w-full p-4 border border-gray-300 rounded-lg resize-vertical text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Type or paste your text here..."
        ></textarea>

        <button
          onClick={countWords}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full mb-4"
        >
          Count Words
        </button>

        <p className="text-lg text-gray-700 text-center">
          Number of words: <span className="font-bold" id="wordCount">{wordCount}</span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
