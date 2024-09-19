'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  // Use a reliable QR code generator API (goqr.me)
  const generateQRCode = () => {
    if (inputValue.trim()) {
      const finalURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}&size=200x200`;
      setQrCodeUrl(finalURL);
      setErrorMessage(false);
    } else {
      setQrCodeUrl('');
      setErrorMessage(true);
    }
  };

  const closeError = () => {
    setErrorMessage(false);
  };

  return (
    <section>
      <TopMenu />
      <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">QR Code Generator</h1>

        {/* QR Form Section */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text/link"
            className="w-full md:w-3/4 border-2 border-red-500 rounded-lg p-3 focus:outline-none focus:border-red-600 transition-colors"
          />
          <button
            onClick={generateQRCode}
            className="w-full md:w-1/4 bg-red-500 text-white font-semibold p-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Generate
          </button>
        </div>

        {/* Error Message Section */}
        {errorMessage && (
          <div className="w-full md:w-1/2 mt-6">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 rounded-lg flex justify-between items-center">
              <strong>Warning! Please Enter Something...</strong>
              <button onClick={closeError} className="text-yellow-700 font-bold text-xl">
                &times;
              </button>
            </div>
          </div>
        )}

        {/* QR Code and Download Section */}
        <div className="mt-8 text-center">
          {qrCodeUrl && (
            <>
              <img src={qrCodeUrl} alt="QR Code" className="mx-auto border-2 border-gray-300 p-2 rounded-lg" />
              <a href={qrCodeUrl} download="QRCode.png" className="mt-4 inline-block">
                <button className="bg-gray-300 font-semibold text-lg border-2 border-gray-400 p-2 mt-4 rounded-lg hover:bg-gray-400 transition-colors">
                  Download
                </button>
              </a>
            </>
          )}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Page;
