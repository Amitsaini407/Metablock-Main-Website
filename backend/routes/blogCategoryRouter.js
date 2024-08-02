
const express = require('express');
const blogcategoryRouter = express.Router();
const blogCategoryController = require('../controllers/blogCategoryController');

// GET /categories
blogcategoryRouter.get('/', blogCategoryController.getBlogCategories);

// POST /categories
blogcategoryRouter.post('/create', blogCategoryController.addBlogCategory);

// PUT /categories/:id
blogcategoryRouter.put('/update/:id', blogCategoryController.updateBlogCategory);

// DELETE /categories/:id
blogcategoryRouter.delete('/delete/:id', blogCategoryController.deleteBlogCategory);

module.exports = blogcategoryRouter;
