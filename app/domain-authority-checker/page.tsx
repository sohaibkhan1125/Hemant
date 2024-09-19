'use client';
import React, { useState } from 'react';
import Footer from '../Footer';
import TopMenu from '../TopMenu';
import axios from 'axios';

// Define an interface for the metrics object
interface Metrics {
  Domain: string;
  'Domain Authority (DA)': number;
  'Page Authority (PA)': number;
  'Spam Score': number;
  'Total Backlinks': number;
}

const Page = () => {
  const [domain, setDomain] = useState<string>('');  // Type the domain as a string
  const [metrics, setMetrics] = useState<Metrics | null>(null);  // The state can be either of type Metrics or null
  const [error, setError] = useState<string>('');  // Type the error as a string

  const handleCheck = async () => {
    if (!domain) {
      setError('Please enter a domain');
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://domain-da-pa-check.p.rapidapi.com/',
      params: { target: domain },
      headers: {
        'X-RapidAPI-Key': 'cca330428dmsh4b459b029c77e3cp1a7504jsn8f61efbba564',
        'X-RapidAPI-Host': 'domain-da-pa-check.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const data = response.data.body;

      // Update the metrics state with the correct data
      setMetrics({
        Domain: data.target,
        'Domain Authority (DA)': data.da_score,
        'Page Authority (PA)': data.pa_score,
        'Spam Score': data.spam_score,
        'Total Backlinks': data.total_backlinks
      });
      setError('');
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Domain Authority Checker</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
          <input 
            type="text" 
            value={domain} 
            onChange={(e) => setDomain(e.target.value)} 
            placeholder="Enter domain (e.g., www.example.com)" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          
          <button 
            onClick={handleCheck} 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Check Authority
          </button>

          {error && (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          )}

          {metrics && (
            <div id="results" className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Results</h2>
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-4 text-left">Metric</th>
                    <th className="p-4 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(metrics).map(([metric, value], index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-4 text-gray-700">{metric}</td>
                      <td className="p-4 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
 <div className='bg-white h-20'></div>
      <Footer />
    </div>
  );
};

export default Page;
