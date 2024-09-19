'use client';
import React, { useState } from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const BackgroundRemoval = () => {
  // Explicitly type selectedFile as File | null
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputImage, setOutputImage] = useState('https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1024,h_512/https://martinvorel.com/wp-content/uploads/2022/05/Slazzer.png');
  const [downloadEnabled, setDownloadEnabled] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]); // File object is set here
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Please select an image to remove the background from');
      return;
    }

    const formData = new FormData();
    formData.append('image_file', selectedFile);

    fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      body: formData,
      headers: {
        'X-Api-Key': 'cbWpRdG9FmnxqrPgGUdXzP22'
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        setOutputImage(objectURL);
        setDownloadEnabled(true);
      })
      .catch(error => {
        alert(error);
      });
  };

  const handleDownload = () => {
    if (selectedFile) {
      const downloadLink = document.createElement('a');
      downloadLink.href = outputImage;
      downloadLink.download = selectedFile.name; // Now TypeScript knows selectedFile is of type File
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert('No image selected for download.');
    }
  };

  return (
    <div>
      <TopMenu />
      <div className="container mt-4">
        <div className="input-container">
          <input type="file" onChange={handleImageChange} accept="image/*" />
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">Remove Background</button>
        </div>
        <div className="output-container mt-5">
          <img id="output-image" src={outputImage} alt="Background Removed" />
        </div>
        <br />
        <div className="download-container flex flex-col items-center justify-center">
          <button
            id="download-button"
            className="bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded text-white text-center mb-5"
            onClick={handleDownload}
            disabled={!downloadEnabled}
          >
            Download Image
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BackgroundRemoval;
