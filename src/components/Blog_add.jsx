// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [editing, setEditing] = useState(false);
//   const [currentBlogId, setCurrentBlogId] = useState(null);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [expandedBlogId, setExpandedBlogId] = useState(null); // Track expanded blog

//   useEffect(() => {
//     fetchBlogs();
//     fetchCategories();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/blog');
//       setBlogs(response.data);
//       setFilteredBlogs(response.data);
//     } catch (error) {
//       console.error('Error fetching blogs', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/blogcategory');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('category_id', category);
//     formData.append('image', image);

//     try {
//       if (editing) {
//         await axios.put(`http://localhost:5000/api/v1/blog/${currentBlogId}`, formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         alert('Blog updated successfully');
//       } else {
//         const response = await axios.post('http://localhost:5000/api/v1/blog/create', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         setBlogs([response.data, ...blogs]);
//         alert('Blog created successfully');
//       }

//       setTitle('');
//       setDescription('');
//       setCategory('');
//       setImage(null);
//       setEditing(false);
//       setCurrentBlogId(null);
//       fetchBlogs(); // Refresh the list
//     } catch (error) {
//       console.error('Error creating or updating blog', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/blog/${id}`);
//       setBlogs(blogs.filter((blog) => blog._id !== id));
//       setFilteredBlogs(filteredBlogs.filter((blog) => blog._id !== id));
//       alert('Blog deleted successfully');
//     } catch (error) {
//       console.error('Error deleting blog', error);
//     }
//   };

//   const handleEdit = (blog) => {
//     setTitle(blog.title);
//     setDescription(blog.description);
//     setCategory(blog.category_id._id);
//     setEditing(true);
//     setCurrentBlogId(blog._id);
//   };

//   const handleFilter = (categoryId) => {
//     if (categoryId === '') {
//       setFilteredBlogs(blogs);
//     } else {
//       const filtered = blogs.filter((blog) => blog.category_id._id === categoryId);
//       setFilteredBlogs(filtered);
//     }
//   };

//   const truncateDescription = (description, maxLength) => {
//     if (description.length <= maxLength) return description;
//     return `${description.substring(0, maxLength)}...`;
//   };

//   const toggleDescription = (id) => {
//     setExpandedBlogId(expandedBlogId === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <header className="bg-blue-500 text-white p-4 rounded-lg mb-4 text-center">
//         <h1 className="text-3xl">Blog Management</h1>
//       </header>
//       <main className="container mx-auto">
//         <form className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md mb-8" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left font-semibold">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border rounded text-black"
//               required
//               placeholder='Enter title here...'
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left font-semibold">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-3 py-2 border rounded text-black resize-none"
//               required
//               rows={"10"}
//               resize="none"
//               placeholder='Enter your text here...'
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left font-semibold">Category</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-3 py-2 border rounded text-black"
//               required
//             >
//               <option value="" className='text-black'>Select a category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id} className='text-black'>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left font-semibold">Image</label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="w-full px-3 py-2 border rounded"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//             {editing ? 'Update' : 'Submit'}
//           </button>
//         </form>

//         <div className="mb-4 mt-20 ">
//           <label className="block text-gray-700 text-left font-semibold text-2xl">Filter by Category</label>
//           <select
//             onChange={(e) => handleFilter(e.target.value)}
//             className="w-full px-3 py-2 border rounded text-black"
//           >
//             <option value="" className='text-black'>All Categories</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id} className='text-black'>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
//           {filteredBlogs.slice(0,6).map((blog) => {
//             const isExpanded = blog._id === expandedBlogId;
//             const shortDescription = truncateDescription(blog.description, 100);

//             return (
//               <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col hover:scale-105  duration-500">
//                 <h1 className="text-2xl font-bold">{blog.title}</h1>
//                 <p className="text-sm text-gray-500 mt-1"> {new Date(blog.createdDate).toLocaleDateString()}</p>
//                 {blog.image && (
//                   <img
//                     src={`http://localhost:5000/blog/images/${blog.image}`}
//                     alt={blog.title}
//                     className="w-full h-64 object-cover mt-4 rounded-lg"
//                   />
//                 )}
//                 <p className="text-sm text-gray-500 mt-2">Category: {blog.category_id.name}</p>
//                 <p className="text-gray-700 mt-2 flex-grow overflow-y-auto overflow-x-none h-[200px]">
//                   {isExpanded ? blog.description : shortDescription}
//                 </p>
//                 <button
//                   onClick={() => toggleDescription(blog._id)}
//                   className="text-blue-500 mt-2"
//                 >
//                   {isExpanded ? 'Read Less' : 'Read More'}
//                 </button>
//                 <div className="mt-4 flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(blog)}
//                     className="w-full bg-yellow-500 text-white py-2 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(blog._id)}
//                     className="w-full bg-red-500 text-white py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
              
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;




import React, { useEffect, useState , useRef} from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [blogsToShow, setBlogsToShow] = useState(3); // Number of blogs to show initially and increment by
  const editor = useRef(null);
  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/blog');
      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/blogcategory');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category_id', category);
    formData.append('image', image);

    try {
      if (editing) {
        await axios.put(`http://localhost:5000/api/v1/blog/${currentBlogId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Blog updated successfully');
      } else {
        const response = await axios.post('http://localhost:5000/api/v1/blog/create', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setBlogs([response.data, ...blogs]);
        alert('Blog created successfully');
      }

      setTitle('');
      setDescription('');
      setCategory('');
      setImage(null);
      setEditing(false);
      setCurrentBlogId(null);
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error('Error creating or updating blog', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/blog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      setFilteredBlogs(filteredBlogs.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully');
    } catch (error) {
      console.error('Error deleting blog', error);
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setDescription(blog.description);
    setCategory(blog.category_id._id);
    setEditing(true);
    setCurrentBlogId(blog._id);
  };

  const handleFilter = (categoryId) => {
    if (categoryId === '') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => blog.category_id._id === categoryId);
      setFilteredBlogs(filtered);
    }
    setBlogsToShow(6); // Reset blogs to show when filtering
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  const toggleDescription = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  const handleLoadMore = () => {
    setBlogsToShow(blogsToShow + 3); // Increment the number of blogs to show
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-500 text-white p-4 rounded-lg mb-4 text-center">
        <h1 className="text-3xl">Blog Management</h1>
      </header>
      <main className="container mx-auto">
        <form className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
              placeholder='Enter title here...'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left font-semibold">Description</label>
            {/* <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black resize-none"
              required
              rows={"10"}
              resize="none"
              placeholder='Enter your text here...'
            /> */}

<JoditEditor
  ref={editor}
  value={description}
  onBlur={newDescription => setDescription(newDescription)} // use onBlur or onChange
  onChange={newDescription => {}}
  className="w-full h-[500px] px-3 py-2 border rounded text-black"
  config={{
    readonly: false,
    toolbarSticky: false,
    iframe: true, // Enable iframe mode
    iframeCSSLinks: [], 
    iframeStyle: `
      body { 
        color: #000000; /* Set default text color */
      }
      select, option {
        color: #000000; /* Ensure select and option text color is black */
      }
      .jodit-toolbar { 
        color: #000000; /* Example to ensure toolbar text color is also black */
      }
    `,
  }}
/>

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left font-semibold">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            >
              <option value="" className='text-black'>Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id} className='text-black'>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left font-semibold">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            {editing ? 'Update' : 'Submit'}
          </button>
        </form>

        <div className="mb-4 mt-20 ">
          <label className="block text-gray-700 text-left font-semibold text-2xl">Filter by Category</label>
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full px-3 py-2 border rounded text-black"
          >
            <option value="" className='text-black'>All Categories</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id} className='text-black'>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
          {filteredBlogs.slice(0, blogsToShow).map((blog) => {
            const isExpanded = blog._id === expandedBlogId;
            const shortDescription = truncateDescription(blog.description, 100);

            return (
              <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col hover:scale-105 duration-500">
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <p className="text-sm text-gray-500 mt-1">{new Date(blog.createdDate).toLocaleDateString()}</p>
                {blog.image && (
                  <img
                    src={`http://localhost:5000/blog/images/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-64 object-cover mt-4 rounded-lg"
                  />
                )}
                <p className="text-sm text-gray-500 mt-2">Category: {blog.category_id.name}</p>
                <p className="text-gray-700 mt-2 flex-grow overflow-y-auto overflow-x-none h-[200px]">
                  {isExpanded ? blog.description : shortDescription}
                </p>
                <button
                  onClick={() => toggleDescription(blog._id)}
                  className="text-blue-500 mt-2"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="w-full bg-yellow-500 text-white py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="w-full bg-red-500 text-white py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {blogsToShow < filteredBlogs.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
