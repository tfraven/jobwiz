const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
  postedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
  }],
});

module.exports = mongoose.model('Company', companySchema);
