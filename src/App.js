// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ViewDocument from './components/ViewDocument';
import WordDocViewer from './components/WordDocViewer';
import OfficeAppsViewer from './components/OfficeAppsViewer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-document" element={<ViewDocument />} />
        <Route path="/word-doc-viewer" element={<WordDocViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
