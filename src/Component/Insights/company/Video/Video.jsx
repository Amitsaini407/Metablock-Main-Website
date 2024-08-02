// import React, { useState } from "react";

// const Video = () => {
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [photoIndex, setPhotoIndex] = useState(0);
//     const [galleryType, setGalleryType] = useState("All");
//     const [showAll, setShowAll] = useState(false);
//     const [celebration, setCelebration] = useState(false);
//     const [spiritual, setSpiritual] = useState(false);
//     const [office, setOffice] = useState(false);
//     const [trips, setTrips] = useState(false);

//     const celebrations = Array.from({ length: 52 }, (_, index) => `./images/celebration-image-${index + 1}.webp`);
//     const seminarPhotos = Array.from({ length: 169 }, (_, index) => `./events/gallery-event-image-${index + 1}.webp`);
//     const eventPhotos = Array.from({ length: 14 }, (_, index) => `./videos/spiritual-video-${index + 1}.MOV`);
//     const spiritualPhotos = Array.from({ length: 16 }, (_, index) => `./spiritual-gallery/spiritual-${index + 1}.webp`);
//     const officePhotos = Array.from({ length: 4 }, (_, index) => `./office-gallery/office-${index + 1}.webp`);
//     const tripPhotos = Array.from({ length: 5 }, (_, index) => `./trip-gallery/trip-${index + 1}.webp`);

//     const openLightbox = (index) => {
//         setPhotoIndex(index);
//         setLightboxOpen(true);
//     };

//     const handleButtonClick = (type) => {
//         if (type === 'All') {
//             setShowAll(true);
//             setSpiritual(false);
//             setOffice(false); // Reset Office state
//         } else {
//             setShowAll(false);
//             setSpiritual(false);
//             setOffice(false);
//             setGalleryType(type);
//         }
//         if (type === 'spiritual') {
//             setSpiritual(true);
//         }
//         if (type === 'Office') {
//             setOffice(true);
//         }

//         if (type === 'trips') {
//             setTrips(true);
//         }
//     };

//     const handleSelectChange = (event) => {
//         handleButtonClick(event.target.value);
//     };

//     return (
//         <main id="cele_div">
//             <section className="breadcrumb_section breadcrumb_padd">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <ul className="list-inline nomargin">
//                             <li>
//                                 <a href="" target="_blank">
//                                     Home
//                                 </a>
//                             </li>
//                             <li>&gt;</li>
//                             <li>Gallery</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//             <section className="gallery-buttons">
//                 <div className="gallery-buttons-div">
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('All')}>All</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Event')}>Event</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Seminar')}>Seminar</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('celebrations')}>Celebration</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Office')}>Office</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('spiritual')}>Spiritual</button>
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('trips')}>Trips</button>

//                 </div>

//                 <div className="gallery-buttons-responsive">
//                     <select className="gallery-responsive-select" onChange={handleSelectChange}>
//                         <option value="All">All</option>
//                         <option value="Event">Event</option>
//                         <option value="Seminar">Seminar</option>
//                         <option value="celebrations">Celebration</option>
//                         <option value="Office">Office</option>
//                         <option value="spiritual">Spiritual</option>
//                         <option value="trips">Trips</option>
//                     </select>
//                 </div>
//             </section>
//             <section className="gallery-area pt-100 pb-70">
//                 <div className="container">
//                     <div className="row">
//                         {((showAll || galleryType === 'All') ? [...seminarPhotos, ...eventPhotos, ...celebrations, ...spiritualPhotos, ...officePhotos, ...tripPhotos] :
//                             (galleryType === 'Seminar' ? seminarPhotos :
//                                 (galleryType === 'Event' ? eventPhotos :
//                                     (galleryType === 'celebrations' ? celebrations :
//                                         (galleryType === 'spiritual' ? spiritualPhotos :
//                                             (galleryType === 'Office' ? officePhotos :
//                                                 (galleryType === 'trips' ? tripPhotos : [])
//                                             )
//                                         )
//                                     )
//                                 )
//                             )
//                         ).map((imageUrl, index) => (
//                             <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
//                                 <div className="single-gallery-item">
//                                     <a href="#" onClick={() => openLightbox(index)}>
//                                         <video src={imageUrl} alt="video" />
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// };

// export default Video;


// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// const Video = () => {
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [videoIndex, setVideoIndex] = useState(0);
//     const [galleryType, setGalleryType] = useState("All");
//     const [videos, setVideos] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchCategories();
//         fetchVideos();
//     }, []);

//     useEffect(() => {
//         fetchVideos();
//     }, [galleryType]);

//     const fetchCategories = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/v1/category');
//             setCategories(response.data);
//         } catch (error) {
//             console.error('Error fetching categories', error);
//         }
//     };

//     const fetchVideos = async () => {
//         setLoading(true);
//         try {
//             let response;
//             if (galleryType === "All") {
//                 response = await axios.get('http://localhost:5000/api/v1/video/videos');
//             } else {
//                 response = await axios.get(`http://localhost:5000/api/v1/video/videos/category/${galleryType}`);
//             }
//             setVideos(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching videos', error);
//             setLoading(false);
//         }
//     };

//     const openLightbox = (index) => {
//         setVideoIndex(index);
//         setLightboxOpen(true);
//     };

//     const handleButtonClick = (type) => {
//         setGalleryType(type);
//     };

//     const handleSelectChange = (event) => {
//         handleButtonClick(event.target.value);
//     };

//     return (
//         <main id="video_div">
//             <section className="breadcrumb_section breadcrumb_padd">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <ul className="list-inline nomargin">
//                             <li>
//                                 <a href="/" target="_blank">
//                                     Home
//                                 </a>
//                             </li>
//                             <li>&gt;</li>
//                             <li>Video Gallery</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//             <section className="gallery-buttons">
//                 <div className="gallery-buttons-div">
//                     <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('All')}>All</button>
//                     {categories.map((category) => (
//                         <button className="gallery-buttons-div-button" key={category._id} onClick={() => handleButtonClick(category._id)}>{category.name}</button>
//                     ))}
//                 </div>
//                 <div className="gallery-buttons-responsive">
//                     <select className="gallery-responsive-select" onChange={handleSelectChange}>
//                         <option value="All">All</option>
//                         {categories.map((category) => (
//                             <option key={category._id} value={category._id}>{category.name}</option>
//                         ))}
//                     </select>
//                 </div>
//             </section>
//             <section className="gallery-area pt-100 pb-70">
//                 <div className="container">
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <div className="row">
//                             {videos.map((video, index) => (
//                                 <div className="col-lg-4 col-md-6 col-sm-6" key={video._id}>
//                                     <div className="single-gallery-item">
//                                         <a href="#" onClick={() => openLightbox(index)}>
//                                             <video controls style={{ height: "300px", width: '500px', objectFit:"cover", objectPosition:"bottom center", borderRadius:"20px" }}>
//                                                 <source src={`http://localhost:5000/public/videos/${video.url}`} type="video/mp4" />
//                                             </video>
//                                         </a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </section>
//             {lightboxOpen && (
//                 <Lightbox
//                     mainSrc={`http://localhost:5000/public/videos/${videos[videoIndex].url}`}
//                     nextSrc={`http://localhost:5000/public/videos/${videos[(videoIndex + 1) % videos.length].url}`}
//                     prevSrc={`http://localhost:5000/public/videos/${videos[(videoIndex + videos.length - 1) % videos.length].url}`}
//                     onCloseRequest={() => setLightboxOpen(false)}
//                     onMovePrevRequest={() => setVideoIndex((videoIndex + videos.length - 1) % videos.length)}
//                     onMoveNextRequest={() => setVideoIndex((videoIndex + 1) % videos.length)}
//                 />
//             )}
//         </main>
//     );
// };

// export default Video;


import React, { useState, useEffect } from "react";
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Video = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);
    const [galleryType, setGalleryType] = useState("All");
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
        fetchVideos();
    }, []);

    useEffect(() => {
        fetchVideos();
    }, [galleryType]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/category');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    const fetchVideos = async () => {
        setLoading(true);
        try {
            let response;
            if (galleryType === "All") {
                response = await axios.get('http://localhost:5000/api/v1/video/videos');
            } else {
                response = await axios.get(`http://localhost:5000/api/v1/video/videos/category/${galleryType}`);
            }
            setVideos(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching videos', error);
            setLoading(false);
        }
    };

    const openLightbox = (index) => {
        setVideoIndex(index);
        setLightboxOpen(true);
    };

    const handleButtonClick = (type) => {
        setGalleryType(type);
    };

    const handleSelectChange = (event) => {
        handleButtonClick(event.target.value);
    };
    console.log(videos);
    return (
        <main id="video_div">
            <section className="breadcrumb_section breadcrumb_padd">
                <div className="container">
                    <div className="row justify-content-center">
                        <ul className="list-inline nomargin flex align-middle gap-2">
                            <li>
                                <a href="/" target="_blank">
                                    Home
                                </a>
                            </li>
                            <li>&gt;</li>
                            <li>Video Gallery</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="gallery-buttons">
                <div className="gallery-buttons-div">
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('All')}>All</button>
                    {categories.map((category) => (
                        <button className="gallery-buttons-div-button" key={category._id} onClick={() => handleButtonClick(category._id)}>{category.name}</button>
                    ))}
                </div>
                <div className="gallery-buttons-responsive">
                    <select className="gallery-responsive-select" onChange={handleSelectChange}>
                        <option value="All">All</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </section>
            <section className="gallery-area pt-100 pb-70">
                <div className="container">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="row">
                            {videos?.map((video, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={video._id}>
                                    <div className="single-gallery-item">
                                        <a href="#" onClick={() => openLightbox(index)}>
                                            <iframe
                                                width="100%"
                                                height="230px"
                                                src={video.url}
                                                title="Video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                                style={{
                                                    borderRadius: '15px',  // Adjust the radius as needed
                                                    border: '3px solid red',
                                                    objectFit:"cover"  // Adjust the border width and color as needed
                                                }}
                                            ></iframe>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {lightboxOpen && (
                <Lightbox
                    mainSrc={videos[videoIndex].url}
                    nextSrc={videos[(videoIndex + 1) % videos.length].url}
                    prevSrc={videos[(videoIndex + videos.length - 1) % videos.length].url}
                    onCloseRequest={() => setLightboxOpen(false)}
                    onMovePrevRequest={() => setVideoIndex((videoIndex + videos.length - 1) % videos.length)}
                    onMoveNextRequest={() => setVideoIndex((videoIndex + 1) % videos.length)}
                />
            )}
        </main>
    );
};

export default Video;



