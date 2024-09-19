'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu'
import Footer from '../Footer';

const URLSummarizer = () => {
  const [urlInput, setUrlInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!urlInput.trim()) {
      alert('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setSummary('');

    const apiKey = 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78';
    const apiHost = 'article-extractor-and-summarizer.p.rapidapi.com';
    const apiUrl = `https://${apiHost}/summarize?url=${encodeURIComponent(urlInput)}&lang=en&engine=2`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.summary) {
          setSummary(data.summary);
        } else {
          setSummary('No summary found for the provided URL.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        setSummary('An error occurred while summarizing the URL.');
      });
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrlInput(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary)
      .then(() => {
        alert('Summary copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <main>
        <TopMenu/>
    <div className=" flex items-center justify-center h-screen">
      <div className="w-full  rounded-lg px-8 mx-5 py-5">
        <h1 className="text-2xl font-bold text-center mb-6">URL Summarizer Tool</h1>
        <form onSubmit={handleSubmit} className="mb-6 relative">
          <label htmlFor="url" className="block text-gray-700 font-semibold mb-2">Enter Website URL:</label>
          <div className="relative">
            <input
              type="text"
              id="url"
              className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md mb-4"
              placeholder="https://example.com"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              required
            />
            <i
              onClick={handlePaste}
              className="fas fa-paste absolute right-3 top-3 text-gray-500 cursor-pointer"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Summarize
          </button>
        </form>

        {loading ? (
          <div className="dots-container flex items-center justify-center">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        ) : (
          <div id="results" className="mt-4 relative">
            {summary && (
              <div className="p-4 bg-gray-100 rounded-md relative">
                <h2 className="text-lg font-semibold mb-4 text-blue-600">Summary:</h2>
                <p id="summaryText" className="text-gray-700">{summary}</p>
                <i
                  onClick={copyToClipboard}
                  className="fas fa-copy absolute bottom-2 right-2 text-gray-500 cursor-pointer"
                  title="Copy Summary"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default URLSummarizer;
