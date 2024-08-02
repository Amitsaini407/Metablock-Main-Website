

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
