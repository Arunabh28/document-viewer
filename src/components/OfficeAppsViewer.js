import React from 'react';
import { useLocation } from 'react-router-dom';

const OfficeAppsViewer = () => {
  const location = useLocation();
  const { fileURL } = location.state || {};

  if (!fileURL) {
    return <div>No document URL found</div>;
  }

  // Microsoft Office Online viewer URL
  const officeViewerURL = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fileURL)}`;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={officeViewerURL}
        style={{ border: 'none', height: '100%', width: '100%' }}
        title="Word Document Viewer"
      />
    </div>
  );
};

export default OfficeAppsViewer;
