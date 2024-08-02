const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String, // URL or path to the image
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'BlogCategory',
    required: true
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
