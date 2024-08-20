// src/components/WordDocViewer.js
import React, { useEffect, useRef, useState } from 'react';
import { renderAsync } from 'docx-preview';
import { useLocation } from 'react-router-dom';

const WordDocViewer = () => {
  const location = useLocation();
  const { fileURL } = location.state || {};
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure ref is not null before attempting to render
    if (fileURL && containerRef.current) {
      fetch(fileURL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
          return renderAsync(arrayBuffer, containerRef.current)
            .then(() => setLoading(false))
            .catch(err => {
              console.error(err);
              setLoading(false);
            });
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [fileURL]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Word Document Viewer</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div ref={containerRef} />
      )}
    </div>
  );
};

export default WordDocViewer;
