
// const Category = require('../models/categoryModel');

// // Get all categories
// exports.getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Add a new category
// exports.addCategory = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const newCategory = new Category({ name });
//     await newCategory.save();
//     res.status(201).json(newCategory);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update an existing category
// exports.updateCategory = async (req, res) => {
// //   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate( { name });
//     if (!updatedCategory) {
//       return res.status(404).json({ message: 'Category not found' });
//     }
//     res.json(updatedCategory);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a category
// exports.deleteCategory = async (req, res) => {
// //   const { id } = req.params;
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(id);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: 'Category not found' });
//     }
//     res.json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     console.error("Error deleting category:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

const Category = require('../models/categoryModel');

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new category
exports.addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing category
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: error.message });
  }
};
