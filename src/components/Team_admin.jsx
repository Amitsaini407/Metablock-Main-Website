
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [members, setMembers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     position: '',
//     experience: '',
//     image: null,
//   });

//   const fetchMembers = async (query = '') => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/team/' + (query ? 'search' : 'getallmembers'), {
//         params: query ? { name: query } : {}
//       });
//       setMembers(response.data.data.members);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchMembers(searchQuery); // Fetch based on search query or default to all members
//   }, [searchQuery]); // Fetch when searchQuery changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       image: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('position', formData.position);
//     formDataToSend.append('experience', formData.experience);
//     if (formData.image) formDataToSend.append('image', formData.image);

//     try {
//       if (editingMember) {
//         await axios.put(`http://localhost:5000/api/v1/team/update/${editingMember._id}`, formDataToSend);
//       } else {
//         await axios.post('http://localhost:5000/api/v1/team/create', formDataToSend);
//       }
//       fetchMembers();
//       setEditingMember(null);
//       setFormData({
//         name: '',
//         position: '',
//         experience: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member);
//     setFormData({
//       name: member.name,
//       position: member.position,
//       experience: member.experience,
//       image: null,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/team/delete/${id}`);
//       setMembers(members.filter((member) => member._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="md:w-1/3 bg-white text-black p-4 shadow rounded">
//           <h1 className="text-2xl font-bold mb-4">{editingMember ? 'Edit Team Member' : 'Add Team Member'}</h1>
//           <form onSubmit={handleSubmit} className="space-y-4 ">
//             <div >
//               <label className="block mb-2 text-black text-left">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your name'
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-black text-left">Position</label>
//               <input
//                 type="text"
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your position'
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-black text-left">Experience</label>
//               <input
//                 type="text"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your experience'
//               />
//             </div>
//             <div>
//               <label className="block mb-2">Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="w-full border p-2 rounded"
//               />
//             </div>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               {editingMember ? 'Update' : 'Add'} Member
//             </button>
//           </form>
//         </div>
//         <div className="md:w-2/3 bg-white p-4 shadow rounded">
//           <h1 className="text-2xl font-bold mb-4">Team Members</h1>
//           <div className="mb-4">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full border p-2 rounded text-black"
//               placeholder="Search by name"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {members.map((member) => (
//               <div key={member._id} className="border p-4 rounded shadow">
//                 <img
//                   src={`http://localhost:5000/team/images/${member.image}`}
//                   alt={member.name}
//                   className="w-full h-48 text-black object-cover mb-4 rounded"
//                 />
//                 <h2 className="text-xl text-black font-semibold text-center">{member.name}</h2>
//                 <p className='text-xl text-black font-semibold'>{member.position}</p>
//                 <p className='text-xl text-black font-semibold'>{member.experience} experince</p>
//                 <div className="flex justify-end mt-4">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                     onClick={() => handleEdit(member)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                     onClick={() => handleDelete(member._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// src/App.js
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { useDropzone } from 'react-dropzone';


// const App = () => {
//   const [members, setMembers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     position: '',
//     experience: '',
//     image: null,
//   });

//   const fetchMembers = async (query = '') => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/team/' + (query ? 'search' : 'getallmembers'), {
//         params: query ? { name: query } : {}
//       });
//       setMembers(response.data.data.members);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchMembers(searchQuery); // Fetch based on search query or default to all members
//   }, [searchQuery]); // Fetch when searchQuery changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onDrop = useCallback((acceptedFiles) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       image: acceptedFiles[0],
//     }));
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: 'image/*',
//   });

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       image: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('position', formData.position);
//     formDataToSend.append('experience', formData.experience);
//     if (formData.image) formDataToSend.append('image', formData.image);

//     try {
//       if (editingMember) {
//         await axios.put(`http://localhost:5000/api/v1/team/update/${editingMember._id}`, formDataToSend);
//       } else {
//         await axios.post('http://localhost:5000/api/v1/team/create', formDataToSend);
//       }
//       fetchMembers();
//       setEditingMember(null);
//       setFormData({
//         name: '',
//         position: '',
//         experience: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member);
//     setFormData({
//       name: member.name,
//       position: member.position,
//       experience: member.experience,
//       image: null,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/team/delete/${id}`);
//       setMembers(members.filter((member) => member._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="md:w-1/3 bg-white text-black p-4 shadow rounded">
//           <h1 className="text-2xl font-bold mb-4">{editingMember ? 'Edit Team Member' : 'Add Team Member'}</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block mb-2 text-black text-left">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your name'
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-black text-left">Position</label>
//               <input
//                 type="text"
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your position'
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-black text-left">Experience</label>
//               <input
//                 type="text"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded text-black"
//                 placeholder='Enter your experience'
//               />
//             </div>
//             <div {...getRootProps()} className={`border-2 border-dashed p-6 rounded-md ${isDragActive ? 'bg-blue-200' : 'bg-gray-100'}`}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p>Drop the files here...</p>
//               ) : (
//                 <p>Drag 'n' drop an image here, or click to select an image</p>
//               )}
//             </div>
//             <div>
//               <label className="block mb-2">Or select an image</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="w-full border p-2 rounded"
//               />
//             </div>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               {editingMember ? 'Update' : 'Add'} Member
//             </button>
//           </form>
//         </div>
//         <div className="md:w-2/3 bg-white p-4 shadow rounded">
//           <h1 className="text-2xl font-bold mb-4">Team Members</h1>
//           <div className="mb-4">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full border p-2 rounded text-black"
//               placeholder="Search by name"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {members.map((member) => (
//               <div key={member._id} className="border p-4 rounded shadow">
//                 <img
//                   src={`http://localhost:5000/team/images/${member.image}`}
//                   alt={member.name}
//                   className="w-full h-48 text-black object-cover mb-4 rounded"
//                 />
//                 <h2 className="text-xl text-black font-semibold text-center">{member.name}</h2>
//                 <p className='text-xl text-black font-semibold'>{member.position}</p>
//                 <p className='text-xl text-black font-semibold'>{member.experience} years of experience</p>
//                 <div className="flex justify-end mt-4">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                     onClick={() => handleEdit(member)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                     onClick={() => handleDelete(member._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  MEMBER: 'member',
};

const Member = ({ member, index, moveMember, handleEdit, handleDelete }) => {
  const [, ref] = useDrag({
    type: ItemTypes.MEMBER,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.MEMBER,
    hover: (item) => {
      if (item.index !== index) {
        moveMember(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="border p-4 rounded shadow">
      <img
        src={`http://localhost:5000/team/images/${member.image}`}
        alt={member.name}
        className="w-full h-48 text-black object-cover mb-4 rounded"
      />
      <h2 className="text-xl text-black font-semibold text-center">{member.name}</h2>
      <p className='text-xl text-black font-semibold'>{member.position}</p>
      <p className='text-xl text-black font-semibold'>{member.experience} years of experience</p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => handleEdit(member)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => handleDelete(member._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    experience: '',
    image: null,
  });

  const fetchMembers = async (query = '') => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/team/' + (query ? 'search' : 'getallmembers'), {
        params: query ? { name: query } : {}
      });
      setMembers(response.data.data.members);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMembers(searchQuery); // Fetch based on search query or default to all members
  }, [searchQuery]); // Fetch when searchQuery changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      image: acceptedFiles[0],
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('experience', formData.experience);
    if (formData.image) formDataToSend.append('image', formData.image);

    try {
      if (editingMember) {
        await axios.put(`http://localhost:5000/api/v1/team/update/${editingMember._id}`, formDataToSend);
      } else {
        await axios.post('http://localhost:5000/api/v1/team/create', formDataToSend);
      }
      fetchMembers();
      setEditingMember(null);
      setFormData({
        name: '',
        position: '',
        experience: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      position: member.position,
      experience: member.experience,
      image: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/team/delete/${id}`);
      setMembers(members.filter((member) => member._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const moveMember = (fromIndex, toIndex) => {
    const updatedMembers = [...members];
    const [movedMember] = updatedMembers.splice(fromIndex, 1);
    updatedMembers.splice(toIndex, 0, movedMember);
    setMembers(updatedMembers);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3 bg-white text-black p-4 shadow rounded">
            <h1 className="text-2xl font-bold mb-4">{editingMember ? 'Edit Team Member' : 'Add Team Member'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-black text-left">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-black"
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label className="block mb-2 text-black text-left">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-black"
                  placeholder='Enter your position'
                />
              </div>
              <div>
                <label className="block mb-2 text-black text-left">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-black"
                  placeholder='Enter your experience'
                />
              </div>
              <div {...getRootProps()} className={`border-2 border-dashed p-6 rounded-md ${isDragActive ? 'bg-blue-200' : 'bg-gray-100'}`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here...</p>
                ) : (
                  <p>Drag 'n' drop an image here, or click to select an image</p>
                )}
              </div>
              <div>
                <label className="block mb-2">Or select an image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                {editingMember ? 'Update' : 'Add'} Member
              </button>
            </form>
          </div>
          <div className="md:w-2/3 bg-white p-4 shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Team Members</h1>
            <div className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border p-2 rounded text-black"
                placeholder="Search by name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member, index) => (
                <Member
                  key={member._id}
                  member={member}
                  index={index}
                  moveMember={moveMember}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;



