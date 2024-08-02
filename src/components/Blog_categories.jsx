import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog_categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState({ id: '', name: '' });

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/blogcategory');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching categories');
      }
    };
    fetchCategories();
  }, []);

  // Handle new category submission
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/blogcategory/create', { name: newCategory });
      setNewCategory('');
      const response = await axios.get('http://localhost:5000/api/v1/blogcategory');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
      alert('Error adding category');
    }
  };

  // Handle category update
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/blogcategory/update/${editCategory.id}`, { name: editCategory.name });
      setEditCategory({ id: '', name: '' });
      const response = await axios.get('http://localhost:5000/api/v1/blogcategorys');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
      alert('Error updating category');
    }
  };

  // Handle category deletion
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/blogcategory/delete/${id}`);
      const response = await axios.get('http://localhost:5000/api/v1/blogcategory');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
      alert('Error deleting category');
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8 bg-red">
      {/* Add Category Form */}
      <div className="max-w-md mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Edit Category Form */}
      {editCategory.id && (
        <div className="max-w-md mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Edit Category</h2>
          <form onSubmit={handleUpdateCategory} className="space-y-4">
            <input
              type="text"
              placeholder="Category Name"
              value={editCategory.name}
              onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Update Category
            </button>
          </form>
        </div>
      )}

      {/* Category List */}
      <div className="max-w-4xl mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category._id} className="border border-gray-300 rounded p-4 flex justify-between items-center">
              <span className="text-lg font-semibold text-black">{category.name}</span>
              <div>
                <button
                  onClick={() => setEditCategory({ id: category._id, name: category.name })}
                  className="mr-2 p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog_categories;
