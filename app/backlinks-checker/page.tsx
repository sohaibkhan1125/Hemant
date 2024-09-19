'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

interface Results {
  result?: string;
  error?: string;
  body?: {
    target: string;
    da_score: number;
    total_backlinks: number;
  };
}

const Page = () => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Results | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      alert('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setResults(null);

    const apiKey = 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78';
    const apiHost = 'domain-da-pa-check.p.rapidapi.com';
    const apiUrl = `https://${apiHost}/?target=${encodeURIComponent(url)}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setLoading(false);
      setResults(data);
    } catch (error) {
      setLoading(false);
      setResults({ error: 'An error occurred while fetching backlinks.' });
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const displayResults = () => {
    if (results?.result === 'success' && results.body) {
      const { target, da_score, total_backlinks } = results.body;

      return (
       
        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Results for: {target}</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-indigo-700">{(total_backlinks / 1e9).toFixed(2)}B</p>
              <p className="text-xl text-gray-600">External backlinks</p>
              <p className="text-lg text-gray-500">Pointing to: {target}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-700">{da_score}</p>
              <p className="text-xl text-gray-600">Domain Authority</p>
              <p className="text-lg text-gray-500">(Score)</p>
            </div>
          </div>
        </div>
       
      );
    } else if (results?.error) {
      return <p className="text-red-500">{results.error}</p>;
    } else {
      return <p className="text-gray-500">No data found for the provided URL.</p>;
    }
  };

  return (
    <div>
      <TopMenu />
      <div className="flex flex-col justify-center items-center w-[500px] md:w-[1400px] ml-10">
        <div className="w-full  rounded-lg px-8 mx-5 py-5">
          <h1 className="text-2xl font-bold text-center mb-6">Backlinks Checker Tool</h1>
          <form onSubmit={handleSubmit} className="mb-6 relative">
            <label htmlFor="url" className="block text-gray-700 font-semibold mb-2">Enter Domain or URL:</label>
            <div className="relative">
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md mb-4"
                placeholder="https://example.com"
                required
              />
              <i
                onClick={handlePaste}
                className="fas fa-paste absolute right-3 top-3 text-gray-500 cursor-pointer"
              ></i>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Check Backlinks
            </button>
          </form>

          {loading ? (
            <div className="dots-container flex items-center justify-center">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          ) : (
            <div id="results" className="mt-4">
              {results && displayResults()}
            </div>
          )}
        </div>
      </div>
      <div className='bg-white h-[200px]'></div>
      <div>
      <Footer  />
      </div>
    </div>
  );
};

export default Page;
