const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Get all jobs
router.get('/', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Get a single job by ID
router.get('/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.json(job);
});

// Post a new job
router.post('/', async (req, res) => {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.json(savedJob);
});

module.exports = router;
