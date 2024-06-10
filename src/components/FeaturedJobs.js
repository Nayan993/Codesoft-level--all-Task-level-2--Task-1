import React from 'react';
import './FeaturedJobs.css';

function FeaturedJobs() {
    // Dummy data for featured jobs
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'Tech Co.' },
        { id: 2, title: 'Product Manager', company: 'Biz Corp.' },
        { id: 3, title: 'UX Designer', company: 'Design Studio' }
    ];

    return (
        <section className="featured-jobs">
            <h2>Featured Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FeaturedJobs;
