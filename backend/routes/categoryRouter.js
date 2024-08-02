
// // routes/categoryRoutes.js

// const express = require('express');
// const categoryRouter = express.Router();
// const CategoryController = require('../controllers/categoryController');
// // const authMiddleware = require('../authMiddleware');

// // GET /categories
// categoryRouter.get('/', CategoryController.getCategories);

// // POST /categories
// categoryRouter.post('/create', CategoryController.addCategory);

// // PUT /categories/:id
// categoryRouter.put('/:id', CategoryController.updateCategory);

// // DELETE /categories/:id
// categoryRouter.delete('/:id', CategoryController.deleteCategory);

// module.exports = categoryRouter

const express = require('express');
const categoryRouter = express.Router();
const CategoryController = require('../controllers/categoryController');

// GET /categories
categoryRouter.get('/', CategoryController.getCategories);

// POST /categories
categoryRouter.post('/create', CategoryController.addCategory);

// PUT /categories/:id
categoryRouter.put('/update/:id', CategoryController.updateCategory);

// DELETE /categories/:id
categoryRouter.delete('/delete/:id', CategoryController.deleteCategory);

module.exports = categoryRouter;
