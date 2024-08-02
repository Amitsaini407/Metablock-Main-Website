// const express = require('express');
// const blogRouter = express.Router();
// const uploadBlog = require('../config/multer');
// const blogController = require('../controllers/blogController');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/blog/images'); // Destination folder for uploads
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + '-' + file.originalname); // File name with unique suffix
//     }
// });

// const uploadBlog = multer({ storage: storage });




// blogRouter.post('/create', uploadBlog.single('image'), blogController.createBlog);

// // Get all blog posts
// blogRouter.get('/', blogController.getBlogs);

// // Get a single blog post
// blogRouter.get('/:id', blogController.getBlogById);

// // Update a blog post
// blogRouter.put('/:id', uploadBlog.single('image'), blogController.updateBlog);

// // Delete a blog post
// blogRouter.delete('/:id', blogController.deleteBlog);

// // Get blogs by category
// blogRouter.get('/category/:category_id', blogController.getBlogsByCategory);

// module.exports = blogRouter;


const express = require('express');
const multer = require('multer');
const blogRouter = express.Router();
const blogController = require('../controllers/blogController');

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/blog/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const uploadBlog = multer({ storage: storage });

// Create a new blog post
blogRouter.post('/create', uploadBlog.single('image'), blogController.createBlog);

// Get all blog posts
blogRouter.get('/', blogController.getBlogs);

// Get a single blog post
blogRouter.get('/:id', blogController.getBlogById);

// Update a blog post
blogRouter.put('/:id', uploadBlog.single('image'), blogController.updateBlog);

// Delete a blog post
blogRouter.delete('/:id', blogController.deleteBlog);

// Get blogs by category
blogRouter.get('/category/:category_id', blogController.getBlogsByCategory);

module.exports = blogRouter;
