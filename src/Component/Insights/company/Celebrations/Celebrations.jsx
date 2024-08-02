import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the CSS for styling

import "./Celebrations.css";

const Celebrations = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const Celebration = Array.from({ length: 52 }, (_, index) => `./images/celebration-image-${index + 1}.jpg`);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
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
              <li>Celebrations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {Celebration.map((imageUrl, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-gallery-item">
                  <a href="#" onClick={() => openLightbox(index)}>
                    <img style={{ height: "300px", width: '500px' }} src={imageUrl} alt="image" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          mainSrc={Celebration[photoIndex]}
          nextSrc={Celebration[(photoIndex + 1) % Celebration.length]}
          prevSrc={Celebration[(photoIndex + Celebration.length - 1) % Celebration.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + Celebration.length - 1) % Celebration.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % Celebration.length)}
        />
      )}
    </main>
  );
};

export default Celebrations;
