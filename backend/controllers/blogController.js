const Blog = require('../models/blogModel');
const BlogCategory = require('../models/blogCategoryModel');
const fs = require('fs');
const path = require('path');

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category_id } = req.body;
    const image = req.file ? req.file.filename : null;

    const category = await BlogCategory.findById(category_id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const newBlog = new Blog({
      title,
      createdDate: new Date(),
      image,
      description,
      category_id
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category_id');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single blog post
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('category_id');
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, category_id } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (req.file) {
      // Delete old image
      fs.unlinkSync(path.join(__dirname, '../public/blog/images', blog.image));
      blog.image = req.file.filename;
    }

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.category_id = category_id || blog.category_id;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Delete image file
    fs.unlinkSync(path.join(__dirname, '../public/blog/images', blog.image));

    await blog.deleteOne();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get blogs by category
exports.getBlogsByCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const blogs = await Blog.find({ category_id }).populate('category_id');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
