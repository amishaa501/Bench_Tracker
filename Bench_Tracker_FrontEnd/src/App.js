import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BenchManager from './components/BenchManager';
import MentorHead from './components/MentorHead';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/bench-manager" element={<BenchManager />} />
                <Route path="/mentor-head" element={<MentorHead />} />
            </Routes>
        </Router>
    );
}

export default App;
