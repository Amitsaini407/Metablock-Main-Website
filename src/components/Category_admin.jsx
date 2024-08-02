// src/components/Category.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/category/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/category/create', { name: newCategory });
      setCategories([...categories, response.data]);
      setNewCategory('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditClick = (category) => {
    setEditCategory(category);
    setEditName(category.name);
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/category/update/${editCategory._id}`, { name: editName });
      setCategories(categories.map(category => (category._id === response.data._id ? response.data : category)));
      setEditCategory(null);
      setEditName('');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/category/delete/${id}`);
      setCategories(categories.filter(category => category._id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Categories</h1>

      {editCategory ? (
        <div className="mb-4">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border p-2 mr-2 text-black"
          />
          <button
            onClick={handleUpdateCategory}
            className="bg-green-500 text-black p-2 rounded"
          >
            Update
          </button>
          <button
            onClick={() => setEditCategory(null)}
            className="bg-gray-500 text-white p-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-2 mr-2 text-black"
            placeholder="New category"
          />
          <button
            onClick={handleAddCategory}
            className="bg-blue-500 text-white p-2 mt-3 rounded"
          >
            Add Category
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full text-black">
          <thead>
            <tr className=' bg-slate-500 border border-x-2 border-white'>
              <th className="w-20 py-2 text-white border border-x-2 border-white">Sr. No</th>
              <th className="py-2 text-white border border-x-2 border-white">Category Name</th>
              <th className="py-2 text-white border border-x-2 border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id} className="text-center">
                <td className="border px-4 py-2 text-black font-bold">{index + 1}</td>
                <td className="border px-4 py-2 text-black font-bold">{category.name}</td>
                <td className="border px-4 py-2  text-center justify-center">
                  <button
                    onClick={() => handleEditClick(category)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category._id)}
                    className="bg-red-500 text-white px-3 py-1 mt-2 shadow-sm rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
