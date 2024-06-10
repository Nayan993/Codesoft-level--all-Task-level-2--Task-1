// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import './styles/App.css';
import './components/Header.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                        <li><Link to="/candidate-dashboard">Candidate Dashboard</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/employer-dashboard" element={<EmployerDashboard />} />
                    <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
