// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [images, setImages] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [file, setFile] = useState(null);
//   const [editingImage, setEditingImage] = useState(null);
//   const [filterCategory, setFilterCategory] = useState('');

//   useEffect(() => {
//     fetchImages();
//     fetchCategories();
//   }, []);

//   const fetchImages = async (category_id = '') => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/v1/gallery/images${category_id ? `/category/${category_id}` : ''}`);
//       setImages(response.data);
//     } catch (error) {
//       console.error('Error fetching images', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/category/');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('category_id', selectedCategory);

//     try {
//       if (editingImage) {
//         await axios.put(`http://localhost:5000/api/v1/gallery/images/${editingImage._id}`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setEditingImage(null);
//       } else {
//         await axios.post('http://localhost:5000/api/v1/gallery/images', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//       }
//       setFile(null);
//       setSelectedCategory('');
//       fetchImages();
//     } catch (error) {
//       console.error('Error uploading image', error);
//     }
//   };

//   const deleteImage = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/gallery/images/${id}`);
//       setImages(images.filter((image) => image._id !== id));
//     } catch (error) {
//       console.error('Error deleting image', error);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const categoryId = e.target.value;
//     setFilterCategory(categoryId);
//     fetchImages(categoryId);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-4">Gallery</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-4">
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border p-2 rounded text-black"
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id} className='text-black'>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="border p-2 rounded text-black"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           {editingImage ? 'Update Image' : 'Upload Image'}
//         </button>
//       </form>

//       <div className="mb-4 ">
//         <select
//           value={filterCategory}
//           onChange={handleCategoryChange}
//           className="border p-2 rounded text-black"
//         >
//           <option value="" className='text-black'>All Category</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id} className='text-black'>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {images.map((image) => (
//           <div key={image._id} className="border p-4">
//             <img
//               src={`http://localhost:5000/gallery/images/${image.image}`}
//               alt="Gallery"
//               className="w-full h-64 object-cover"
//             />
//             <div className="mt-2">
//               <p>Category: {image.category_id?.name}</p>
//               <button
//                 onClick={() => {
//                   setEditingImage(image);
//                   setSelectedCategory(image.category_id?._id);
//                 }}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteImage(image._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded ml-2"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    fetchImages();
    fetchCategories();
  }, []);

  const fetchImages = async (category_id = '') => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/gallery/images${category_id ? `/category/${category_id}` : ''}`);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    if (editingImage) {
      // Handle updating a single image
      if (files.length > 0) {
        formData.append('image', files[0]); // Use 'image' for a single file
      }
    } else {
      // Handle uploading multiple images
      Array.from(files).forEach(file => {
        formData.append('images', file); // Use 'images' for multiple files
      });
    }
    formData.append('category_id', selectedCategory);
  
    try {
      if (editingImage) {
        await axios.put(`http://localhost:5000/api/v1/gallery/images/${editingImage._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setEditingImage(null);
      } else {
        await axios.post('http://localhost:5000/api/v1/gallery/images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      setFiles([]);
      setSelectedCategory('');
      fetchImages();
    } catch (error) {
      console.error('Error uploading images', error);
    }
  };
  

  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/gallery/images/${id}`);
      setImages(images.filter((image) => image._id !== id));
    } catch (error) {
      console.error('Error deleting image', error);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setFilterCategory(categoryId);
    fetchImages(categoryId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded text-black"
        >
          <option value="">Select Category</option>
          {categories?.map((category) => (
            <option key={category._id} value={category._id} className='text-black'>
              {category?.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          name="images"
          className="border p-2 rounded text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingImage ? 'Update Image' : 'Upload Images'}
        </button>
      </form>

      <div className="mb-4">
        <select
          value={filterCategory}
          onChange={handleCategoryChange}
          className="border p-2 rounded text-black"
        >
          <option value="" className='text-black'>All Categories</option>
          {categories?.map((category) => (
            <option key={category._id} value={category._id} className='text-black'>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="border p-4 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <img
              src={`http://localhost:5000/gallery/images/${image.image}`}
              alt="Gallery"
              className="w-full h-64 object-cover shadow-md rounded-md"
            />
            <div className="mt-2">
              <p>Category: {image.category_id?.name}</p>
              <button
                onClick={() => {
                  setEditingImage(image);
                  setSelectedCategory(image.category_id?._id);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteImage(image._id)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
