// src/pages/HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="welcome">
                <h1>Welcome to the Job Board</h1>
                <p>Find your dream job</p>
                <button className="search-button">Search Jobs</button>
            </div>
        </div>
    );
};

export default HomePage;
