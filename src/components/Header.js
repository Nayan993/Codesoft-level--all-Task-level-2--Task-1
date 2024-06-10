import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>Job Board</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/job-listings">Job Listings</Link>
                    <Link to="/employer-dashboard">Employer Dashboard</Link>
                    <Link to="/candidate-dashboard">Candidate Dashboard</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
