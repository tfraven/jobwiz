const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobListing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  resume: {
    type: String, // URL or path to the resume file
    required: true,
  },
  coverLetter: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Applied', 'In Review', 'Interview', 'Hired', 'Rejected'],
    default: 'Applied',
  },
  appliedOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Application', applicationSchema);
