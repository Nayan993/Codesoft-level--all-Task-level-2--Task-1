// src/pages/JobsPage.js

import React from 'react';
import './JobsPage.css';

const JobsPage = () => {
    return (
        <div className="jobs-page">
            <h2>Job Listings</h2>
            <ul>
                <li>
                    <h3>Software Engineer</h3>
                    <p>Tech Co.</p>
                </li>
                <li>
                    <h3>Product Manager</h3>
                    <p>Biz Corp.</p>
                </li>
                <li>
                    <h3>UX Designer</h3>
                    <p>Design Studio</p>
                </li>
            </ul>
        </div>
    );
};

export default JobsPage;
