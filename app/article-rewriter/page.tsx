'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  const [inputText, setInputText] = useState<string>('');  // State to hold the input text
  const [outputText, setOutputText] = useState<string>('');  // State to hold the paraphrased output
  const [error, setError] = useState<string>('');  // State to hold any error message

  const serverURL = 'https://api.funtranslations.com/translate/article_rewrite.json';

  // Function to get the paraphrased text
  const getTranslationURL = (text: string) => {
    return `${serverURL}?text=${encodeURIComponent(text)}`;
  };

  const errorHandler = (error: Error) => {
    console.log('Error occurred: ', error);
    setError('Something went wrong. Please try again later.');
  };

  const handleParaphrase = async () => {
    if (!inputText) {
      alert('Please enter some text to paraphrase.');
      return;
    }

    try {
      const url = getTranslationURL(inputText);
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setOutputText(data.contents.translated);
      setError('');
    } catch (err) {
      errorHandler(err as Error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />

      <div className="sm:w-[800px] mx-auto p-8">
        <nav className="navigation-container text-center">
          <div className="nav-brand font-semibold text-2xl text-gray-800">Article Rewriter</div>
        </nav>

        <textarea
          id="txt-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Put your content here then hit the paraphrase button."
          className="mt-4 w-[270px] sm:w-[700px] px-4 py-3 sm:ml-10 border-2 border-gray-300 rounded-lg resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={6}
        ></textarea>

        <div className="text-center mt-4 mb-4">
          <button
            onClick={handleParaphrase}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-bold transition-colors"
          >
            Paraphrase
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center mt-4 mb-4" id="paraphrase-txt">
          <p>Rewritten text will come here 👇</p>
        </div>

        <div
          id="output"
          className="w-[270px] sm:w-[700px] sm:ml-10 mt-5 border-2 border-gray-300 bg-slate-100 p-3 rounded-lg h-[70px] overflow-auto"
        >
          {outputText || 'Your rewritten text will appear here.'}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
