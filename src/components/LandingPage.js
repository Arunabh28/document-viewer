// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      navigate('/view-document', { state: { fileURL,mimeType: file.type } });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Document Viewer</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default LandingPage;
