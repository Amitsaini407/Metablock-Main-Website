const mongoose = require('mongoose');

const galleryImgSchema = new mongoose.Schema({
  image: { type: String, required: true },
  category_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
  }
});

// Create model from schema
const Gallery = mongoose.model('GalleryImg', galleryImgSchema);

module.exports = Gallery;