import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobListingsPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.get('/api/jobs');
            setJobs(res.data);
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        {job.title} - {job.company}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobListingsPage;
