'use client';
import React, { useRef, useEffect, useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  const inputTextRef = useRef<HTMLTextAreaElement | null>(null);
  const checkBtnRef = useRef<HTMLButtonElement | null>(null);
  const pasteBtnRef = useRef<HTMLButtonElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const outputTextRef = useRef<HTMLParagraphElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const checkBtn = checkBtnRef.current;
    const pasteBtn = pasteBtnRef.current;

    if (checkBtn) {
      checkBtn.addEventListener('click', handleCheckPlagiarism);
    }

    if (pasteBtn) {
      pasteBtn.addEventListener('click', handlePaste);
    }

    return () => {
      if (checkBtn) {
        checkBtn.removeEventListener('click', handleCheckPlagiarism);
      }
      if (pasteBtn) {
        pasteBtn.removeEventListener('click', handlePaste);
      }
    };
  }, []);

  const handleCheckPlagiarism = () => {
    const inputText = inputTextRef.current?.value || '';

    if (inputText.length < 40) {
      alert('Text must be at least 40 characters long.');
      return;
    }

    setLoading(true);
    setResult(null);

    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78',
        'x-rapidapi-host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
        language: 'en',
        includeCitations: false,
        scrapeSources: false,
      }),
    };

    fetch('https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism', options)
      .then((response) => response.json())
      .then((response) => {
        setResult(formatResult(response));
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred while checking for plagiarism.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formatResult = (data: any) => {
    if (!data.sources || data.sources.length === 0) {
      return 'No plagiarism detected.';
    }

    return data.sources.map((source: any) => {
      return `
        <div>
          <h3><a href="${source.url}" target="_blank">${source.title}</a></h3>
          <p>Plagiarism Score: ${source.matches.length} match(es)</p>
          ${source.matches.map((match: any) => `
            <div>
              <p><strong>Matched Text:</strong> ${match.matchText}</p>
              <p>Score: ${match.score.toFixed(2)}</p>
              <p><em>Context:</em> ${match.context.before} <strong>${match.matchText}</strong> ${match.context.after}</p>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (inputTextRef.current) {
        inputTextRef.current.value += text;
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
      alert('Unable to paste from clipboard. Please ensure you have copied text.');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (inputTextRef.current) {
          inputTextRef.current.value += e.target?.result as string;
        }
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid .txt file.');
    }
  };

  return (
    <div className="bg-gray-100">
      <TopMenu />
      <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Plagiarism Checker Tool</h1>
        <div className="relative">
          <textarea
            ref={inputTextRef}
            className="w-full p-4 border border-gray-300 rounded mb-4"
            placeholder="Enter your text here..."
          ></textarea>
          <button ref={pasteBtnRef} className="absolute bottom-6 right-2 bg-transparent text-gray-500 p-2">
            <i className="ph ph-clipboard text-xl"></i>
          </button>
          
        </div>
        <button
          ref={checkBtnRef}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Plagiarism'}
        </button>

        {loading && (
          <div className="dots-container mt-6" style={{ display: 'flex' }}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}

        {result && (
          <div id="result" className="mt-6" dangerouslySetInnerHTML={{ __html: result }} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
