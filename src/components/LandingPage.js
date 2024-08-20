// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const getFileExtension = (filename) => {
  return filename.split('.').pop().toLowerCase();
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const extension = getFileExtension(file.name);

      if (extension === 'docx') {
        navigate('/word-doc-viewer', { state: { fileURL } });
      } else {
        navigate('/view-document', { state: { fileURL, mimeType: file.type } });
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Document Viewer</h1>
      <input type="file" accept=".pdf,.docx,.xlsx,.pptx,.txt,.mp4,.mov" onChange={handleFileChange} />
    </div>
  );
};

export default LandingPage;
