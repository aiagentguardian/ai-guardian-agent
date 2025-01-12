import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import AnalysisResult from './pages/AnalysisResult';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Analysis />} />
          <Route path="/app/:repoId" element={<AnalysisResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;