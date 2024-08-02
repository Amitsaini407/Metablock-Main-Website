const mongoose = require('mongoose');

// Define the schema for videos
const videoSchema = new mongoose.Schema({
  url: { 
    type: String, 
    required: true 
  },
  category_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
  }
}, { timestamps: true }); // Enable timestamps

// Create model from schema
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
