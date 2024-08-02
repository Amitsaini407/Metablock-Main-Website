// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const VideoManager = () => {
//   const [videos, setVideos] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState({ url: '', category_id: '' });
//   const [url, setUrl] = useState('');
//   const [categoryId, setCategoryId] = useState('');

//   // Fetch all videos
//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/video/videos');
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   // Fetch all categories
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/category');
//       console.log('Fetched categories:', response.data);
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error.response ? error.response.data : error.message);
//     }
//   }


//   useEffect(() => {
//     fetchVideos();
//     fetchCategories();
//   }, []);
//   console.log(fetchCategories)
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:5000/api/v1/video/videos/${currentVideo._id}`, { url, category_id: categoryId });
//       } else {
//         await axios.post('http://localhost:5000/api/v1/video/videos', { url, category_id: categoryId });
//       }
//       setUrl('');
//       setCategoryId('');
//       setIsEditing(false);
//       fetchVideos();
//     } catch (error) {
//       console.error('Error saving video:', error);
//     }
//   };

//   // Handle edit button
//   const handleEdit = (video) => {
//     setCurrentVideo(video);
//     setUrl(video.url);
//     setCategoryId(video.category_id?._id);
//     setIsEditing(true);
//   };

//   // Handle delete button
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/video/videos/${id}`);
//       fetchVideos();
//     } catch (error) {
//       console.error('Error deleting video:', error);
//     }
//   };

//  console.log(categories)


//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">{isEditing ? 'Edit Video' : 'Add Video'}</h1>

//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6 space-y-4">
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Video URL"
//           className="block w-full border p-2 text-black"
//         />
//         <select
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           className="block w-full border p-2 text-black"
//         >
//           <option value="">Select Category</option>
//           {categories?.map(category => (
//             <option key={category._id} value={category?._id} className='text-black'>
//               {category?.name}
//             </option>
//           ))}
//         </select>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {isEditing ? 'Update Video' : 'Add Video'}
//         </button>
//       </form>

//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Videos</h2>
//         <div className="space-y-4 flex justify-between flex-wrap">
//           {videos.map(video => (
//             <div key={video._id} className="border p-4 rounded shadow-sm">
//               {/* <p className="text-xl font-semibold">{video.url}</p> */}
//               <iframe width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//               <p className="text-gray-500">Category ID: {video.category_id?.name}</p>
//               <div className="mt-2 flex space-x-2">
//                 <button
//                   onClick={() => handleEdit(video)}
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(video._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoManager;


import { useState, useEffect } from 'react';
import axios from 'axios';

const VideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ url: '', category_id: '' });
  const [url, setUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');

  // Fetch all videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/video/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/v1/video/videos/${currentVideo._id}`, { url, category_id: categoryId });
      } else {
        await axios.post('http://localhost:5000/api/v1/video/videos', { url, category_id: categoryId });
      }
      setUrl('');
      setCategoryId('');
      setIsEditing(false);
      fetchVideos();
    } catch (error) {
      console.error('Error saving video:', error);
    }
  };

  // Handle edit button
  const handleEdit = (video) => {
    setCurrentVideo(video);
    setUrl(video.url);
    setCategoryId(video.category_id?._id);
    setIsEditing(true);
  };

  // Handle delete button
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/video/videos/${id}`);
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{isEditing ? 'Edit Video' : 'Add Video'}</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6 space-y-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Video URL"
          className="block w-full border p-2 text-black"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="block w-full border p-2 text-black"
        >
          <option value="">Select Category</option>
          {categories?.map(category => (
            <option key={category._id} value={category?._id} className='text-black'>
              {category?.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? 'Update Video' : 'Add Video'}
        </button>
      </form>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map(video => (
            <div key={video._id} className="border p-4 rounded shadow hover:scale-105 duration-500 cursor-pointer ">
              <iframe
                width="100%"
                height="auto"
                src={video.url}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-gray-500 mt-2 text-left font-semibold">Category: {video.category_id?.name}</p>
              <div className="mt-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(video)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
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

export default VideoManager;


