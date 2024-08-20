// src/components/ViewDocument.js
import React from 'react';
import { useLocation } from 'react-router-dom';

// Check if MIME type corresponds to a video file
const isVideoMimeType = (mimeType) => {
  return mimeType.startsWith('video/');
};

// Check if MIME type corresponds to an Office file
const isOfficeMimeType = (mimeType) => {
  return [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  ].includes(mimeType);
};

const ViewDocument = () => {
  const location = useLocation();
  const { fileURL, mimeType } = location.state || {};

  return (
    <div style={{ padding: '20px' }}>
      <h1>View Document</h1>
      {fileURL ? (
        isVideoMimeType(mimeType) ? (
          <div>
            <video controls style={{ width: '100%', height: '90vh' }} src={fileURL}>
              Your browser does not support the video tag.
            </video>
          </div>
        ) : isOfficeMimeType(mimeType) ? (
          <div>
            <p>This is an Office file. Click below to download it and open it with a native application:</p>
            <a href={fileURL} download>
              Download Office File
            </a>
          </div>
        ) : (
          <iframe
            src={fileURL}
            style={{ width: '100%', height: '90vh' }}
            title="Document Viewer"
          ></iframe>
        )
      ) : (
        <p>No document to display</p>
      )}
    </div>
  );
};

export default ViewDocument;
