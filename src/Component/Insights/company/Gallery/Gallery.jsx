import React, { useState, useEffect } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import axios from 'axios';


import "./Gallery.css";
import shadows from "@mui/material/styles/shadows";

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [galleryType, setGalleryType] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const [celebration, setCelebration] = useState(false);
    const [spiritual, setSpiritual] = useState(false);
    const [office, setOffice] = useState(false);
    const [trips, setTrips] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);



    const celebrations = Array.from({ length: 52 }, (_, index) => `./images/celebration-image-${index + 1}.webp`);
    const seminarPhotos = Array.from({ length: 169 }, (_, index) => `./events/gallery-event-image-${index + 1}.webp`);
    const eventPhotos = Array.from({ length: 14 }, (_, index) => `./images/gallery-seminar-image-${index + 1}.webp`);
    const spiritualPhotos = Array.from({ length: 16 }, (_, index) => `./spiritual-gallery/spiritual-${index + 1}.webp `);
    const officePhotos = Array.from({ length: 4 }, (_, index) => `./office-gallery/office-${index + 1}.webp`);
    const tripPhotos = Array.from({ length: 5 }, (_, index) => `./trip-gallery/trip-${index + 1}.webp`);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setLightboxOpen(true);
    };

    useEffect(() => {
        fetchCategories();
        fetchImages();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/category');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };


    useEffect(() => {
        fetchImages();
    }, [galleryType]);


    const handleButtonClick = (type) => {
        setGalleryType(type);
        fetchImages();

    };

    const fetchImages = async () => {
        setLoading(true);
        try {
            let response;
            if (galleryType === "All") {
                response = await axios.get('http://localhost:5000/api/v1/gallery/images');
            } else {
                response = await axios.get(`http://localhost:5000/api/v1/gallery/images/category/${galleryType}`);
            }
            setImages(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching images', error);
            setLoading(false);
        }
    };




    // const handleButtonClick = (type) => {
    //     if (type === 'All') {
    //         setShowAll(true);
    //         setSpiritual(false);
    //         setOffice(false); // Reset Office state
    //     } else {
    //         setShowAll(false);
    //         setSpiritual(false);
    //         setOffice(false);
    //         setGalleryType(type);
    //     }
    //     if (type === 'spiritual') {
    //         setSpiritual(true);
    //     }
    //     if (type === 'Office') {
    //         setOffice(true);
    //     }

    //     if (type === 'trips') {
    //         setTrips(true);
    //     }
    // };

    const handleSelectChange = (event) => {
        handleButtonClick(event.target.value);
    };

    return (
        <main id="cele_div">
            <section className="breadcrumb_section breadcrumb_padd">
                <div className="container">
                    <div className="row justify-content-center">
                        <ul className="list-inline nomargin">
                            <li>
                                <a href="" target="_blank">
                                    Home
                                </a>
                            </li>
                            <li>&gt;</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="gallery-buttons">
                <div className="gallery-buttons-div">
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('All')}>All</button>
                    {/* <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Event')}>Event</button>
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Seminar')}>Seminar</button>
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('celebrations')}>Celebration</button>
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('Office')}>Office</button>
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('spiritual')}>Spiritual</button>
                    <button className="gallery-buttons-div-button" onClick={() => handleButtonClick('trips')}>Trips</button>  */}

                    {categories.map((category) => (
                        <button className="gallery-buttons-div-button" key={category._id} onClick={() => handleButtonClick(category._id)}>{category.name}</button>
                    ))}
                </div>

                {/* <div className="gallery-buttons-responsive">
                    <select className="gallery-responsive-select" onChange={handleSelectChange}>
                        <option value="All">All</option>
                        <option value="Event">Event</option>
                        <option value="Seminar">Seminar</option>
                        <option value="celebrations">Celebration</option>
                        <option value="Office">Office</option>
                        <option value="spiritual">Spiritual</option>
                        <option value="trips">Trips</option>
                    </select>
                </div> */}

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
                {/* <div className="container">
                    <div className="row">
                        {((showAll || galleryType === 'All') ? [...seminarPhotos, ...eventPhotos, ...celebrations, ...spiritualPhotos, ...officePhotos, ...tripPhotos] :
                            (galleryType === 'Seminar' ? seminarPhotos :
                                (galleryType === 'Event' ? eventPhotos :
                                    (galleryType === 'celebrations' ? celebrations :
                                        (galleryType === 'spiritual' ? spiritualPhotos :
                                            (galleryType === 'Office' ? officePhotos :
                                                (galleryType === 'trips' ? tripPhotos : [])
                                            )
                                        )
                                    )
                                )
                            )
                        ).map((imageUrl, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <div className="single-gallery-item">
                                    <a href="#" onClick={() => openLightbox(index)}>
                                        <img style={{ height: "300px", width: '500px' }} src={imageUrl} alt="image" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="container">
                    {/* {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="row">
                            {images.map((image, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={image._id}>
                                    <div className="single-gallery-item">
                                        <a href="#" onClick={() => openLightbox(index)}>
                                            <img style={{ height: "300px", width: '500px' }} src={`http://localhost:5000/public/gallery/images/${image.image}`} alt="image" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )} */}

                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="row">
                            {images.map((image, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={image._id}>
                                    <div className="single-gallery-item">
                                        <a href="#" onClick={() => openLightbox(index)}>
                                            <img style={{ height: "250px", width: '450px', objectFit: "object-scale-down", objectPosition: "center center", borderRadius: "20px" }} src={`http://localhost:5000/gallery/images/${image.image}`} alt="Gallery Image"  />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {/* {lightboxOpen && (
                <Lightbox
                    mainSrc={(showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    )[photoIndex]}
                    nextSrc={(showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    )[(photoIndex + 1) % ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length)]}
                    prevSrc={(showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    )[(photoIndex + ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length) - 1) % ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length)]}
                    onCloseRequest={() => setLightboxOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length) - 1) % ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length))}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % ((showAll ? [...seminarPhotos, ...eventPhotos, ...tripPhotos] :
                        (galleryType === 'Seminar' ? seminarPhotos :
                            (galleryType === 'Event' ? eventPhotos :
                                (galleryType === 'spiritual' ? spiritualPhotos :
                                    (galleryType === 'Office' ? officePhotos :
                                        (galleryType === 'trips' ? tripPhotos : [])
                                    )
                                )
                            )
                        )
                    ).length))}
                />
            )} */}

            {lightboxOpen && (
                <Lightbox
                    mainSrc={`http://localhost:5000/public/gallery/images/${images[photoIndex].image}`}
                    nextSrc={`http://localhost:5000/public/gallery/images/${images[(photoIndex + 1) % images.length].image}`}
                    prevSrc={`http://localhost:5000/public/gallery/images/${images[(photoIndex + images.length - 1) % images.length].image}`}
                    onCloseRequest={() => setLightboxOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </main>
    );
};

export default Gallery;
